class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:users][:username],
            params[:users][:password]
        )

        if @user 
            login!(@user)
            render '/api/users/show'
        else
            render json: {
                errors: ['invalid login information'],
                status: 401
                }
        end
    end

    def destroy
        if logged_in? 
            logout!
            render json: {}
        else
            render json: ["you are not logged in ;)"], status: 422
        end
    end

end
