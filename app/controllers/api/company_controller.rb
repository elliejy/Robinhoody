class Api::CompanyController < ApplicationController

    def index
        @companies = Company.all
    end

    def show
        @company = Company.find_by(ticker: params[:ticker])
    end
end
