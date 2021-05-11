class Api::SessionsController < ApplicationController
    def new
      render :new
    end
  
    def create
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
      if @user.nil?
        render json: ['Nope. Wrong credentials!'], status: 401
      else
        login!(@user)
        render 'users/show';
      end
  
    end
  
    def destroy
      logout!
      render json: { message: 'Logout successful.' }
    end
  end
  