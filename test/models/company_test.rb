# == Schema Information
#
# Table name: companies
#
#  id           :bigint           not null, primary key
#  company_name :string           not null
#  ticker       :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class CompanyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
