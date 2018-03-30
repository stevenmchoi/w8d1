class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      # Tell the user that something went wrong. Let them try again.
      # flash.now[:errors] = @user.errors.full_messages
      render json: @user.errors.full_messages, status: 422

    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
