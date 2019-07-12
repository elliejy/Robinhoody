class Api::SearchController < ApplicationController

    def search
        @search = Company.where(
        "company_name LIKE ? ", "%#{params["str".downcase]}%
        OR company_name LIKE ? ", "%#{params["str".upcase]}% 
        OR ticker LIKE ? ", "%#{params["str".upcase]}%
        OR ticker LIKE ? ", "%#{params["str".downcase]}%
        "
        )
        render json: @search
    end


    private
    def search_params
        params.require(:search).permit(:str)
    end
end
