class Page < ActiveRecord::Base
  before_save :normilize
  before_validation :normilize

  validates :path, :uniqueness => {case_sensitive: false}

  def normilize
    self.path = self.path.gsub(/^\/+/, '')
    self.path = self.path.gsub(/\/+$/, '')
    self.path = self.path.gsub(/^\s+/, '')
    self.path = self.path.gsub(/\s+$/, '')
  end

end
