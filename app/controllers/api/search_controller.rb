class Api::SearchController < ApplicationController

    def search
        @search = Company.where(
            "company_name ILIKE ? OR ticker ILIKE ?",
            "%#{params["str"]}%",
            "%#{params["str"]}%"
        )
        render json: @search
    end


    private
    def search_params
        params.require(:search).permit(:str)
    end
end
