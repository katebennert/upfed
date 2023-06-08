# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
class FallbackController < ActionController::Base

  def index
    # React app index page
    render file: 'public/index.html'
  end

  #idk what this error is but there is an error here
end
