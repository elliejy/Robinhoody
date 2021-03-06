
class User < ApplicationRecord
     validates :username, :password_digest, :session_token, presence: true
     validates :username, uniqueness: true
     validates :password, length: { minimum: 6 }, allow_nil: true
    
     has_many :watchlists
    
    attr_reader :password
   
    after_initialize :ensure_token
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def reset_token
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username:username)
        return nil unless user
        user.is_password?(password) ? user :nil
    end

    private 
    def ensure_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end
