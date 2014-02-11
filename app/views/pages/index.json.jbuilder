json.array!(@pages) do |page|
  json.extract! page, :id, :path, :title, :content
  json.url page_url(page, format: :json)
end
