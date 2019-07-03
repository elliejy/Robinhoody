# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  name            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence:true, uniqueness:true
    validates :password, length:{minium: 5, allow_nil: true}

    has_many :watchlists
    
    attr_reader :password
    after_initalization :ensure_token
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def reset_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def self.find_by_credentials(username, password)
        user = Users.find_by(username:username)
        return nil unless user
        user.is_password?(password) ? user :nil
    end

    private 
    def ensure_token
        self.session_token =|| SecureRandom.urlsafe_base64
    end

end
