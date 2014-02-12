class PagesController < ApplicationController
  before_action :set_page

  def show
    @meta_title = @page.title
    @meta_canonical = '/' + @page.path
  end

  private

  def set_page
    path = request.original_fullpath
    path[0] = ''
    @page = Page.where(:path => CGI::unescape(path)).first
  end

end
