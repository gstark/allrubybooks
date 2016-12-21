class BooksController < ApplicationController
  def index
    author = Author.find_by(id: params["author"])

    if author
      @books = author.books
    else
      @books = Book.all
    end

    @authors = Author.all.order("name")
  end
end
