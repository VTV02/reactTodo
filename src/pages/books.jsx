import React, { useState } from "react";
import {
  Search,
  BookOpen,
  Calendar,
  User,
  Star,
  Filter,
  Grid,
  List,
} from "lucide-react";

const BookLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const [books] = useState([
    {
      id: 1,
      title: "Đắc Nhân Tâm",
      author: "Dale Carnegie",
      year: 2020,
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      rating: 4.8,
      description: "Nghệ thuật giao tiếp và thu phục lòng người",
      category: "Kỹ năng sống",
      price: "89.000đ",
    },
    {
      id: 2,
      title: "Nhà Giả Kim",
      author: "Paulo Coelho",
      year: 2019,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      rating: 4.9,
      description: "Hành trình tìm kiếm kho báu và ý nghĩa cuộc đời",
      category: "Tiểu thuyết",
      price: "95.000đ",
    },
    {
      id: 3,
      title: "Sapiens: Lược Sử Loài Người",
      author: "Yuval Noah Harari",
      year: 2021,
      image:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop",
      rating: 4.7,
      description: "Từ động vật tầm thường trở thành chủ nhân của trái đất",
      category: "Lịch sử",
      price: "149.000đ",
    },
    {
      id: 4,
      title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
      author: "Rosie Nguyễn",
      year: 2018,
      image:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
      rating: 4.6,
      description: "Hướng dẫn trưởng thành cho tuổi trẻ",
      category: "Kỹ năng sống",
      price: "79.000đ",
    },
    {
      id: 5,
      title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
      author: "Nguyễn Nhật Ánh",
      year: 2015,
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&h=400&fit=crop",
      rating: 4.9,
      description: "Câu chuyện tuổi thơ đầy cảm xúc",
      category: "Văn học Việt Nam",
      price: "85.000đ",
    },
    {
      id: 6,
      title: "Cà Phê Cùng Tony",
      author: "Tony Buổi Sáng",
      year: 2017,
      image:
        "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=400&fit=crop",
      rating: 4.5,
      description: "Những góc nhìn về cuộc sống và khởi nghiệp",
      category: "Kinh doanh",
      price: "69.000đ",
    },
  ]);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black border-b border-yellow-600/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-600 p-2.5 rounded-xl shadow-lg shadow-yellow-600/50">
                <BookOpen className="w-7 h-7 text-black" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-yellow-600">
                  Thư Viện Sách
                </h1>
                <p className="text-yellow-600/70 text-sm">
                  Khám phá tri thức mỗi ngày
                </p>
              </div>
            </div>
            <div className="bg-yellow-600/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-yellow-600/30">
              <span className="text-yellow-600 font-semibold">
                {filteredBooks.length} cuốn
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm sách, tác giả, thể loại..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3.5 pl-12 rounded-xl border-2 border-yellow-600/30 focus:border-yellow-600 focus:outline-none bg-black text-yellow-600 placeholder-yellow-600/50"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-600 w-5 h-5" />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-3 bg-black border-2 border-yellow-600/30 rounded-xl hover:bg-yellow-600/10 transition-colors">
              <Filter className="w-5 h-5 text-yellow-600" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-3 rounded-xl transition-colors ${
                viewMode === "grid"
                  ? "bg-yellow-600 text-black"
                  : "bg-black border-2 border-yellow-600/30 text-yellow-600"
              }`}>
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-3 rounded-xl transition-colors ${
                viewMode === "list"
                  ? "bg-yellow-600 text-black"
                  : "bg-black border-2 border-yellow-600/30 text-yellow-600"
              }`}>
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }>
          {filteredBooks.map((book) =>
            viewMode === "grid" ? (
              <div
                key={book.id}
                className="bg-zinc-900 rounded-2xl shadow-lg shadow-yellow-600/10 hover:shadow-yellow-600/20 border border-yellow-600/20 transition-all duration-300 overflow-hidden group">
                <div className="relative h-72 overflow-hidden bg-zinc-800">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-yellow-600 text-black px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg font-bold text-sm">
                    <Star className="w-4 h-4 fill-black" />
                    {book.rating}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-yellow-600/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-full text-xs font-semibold">
                      {book.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-yellow-600 mb-2 line-clamp-2">
                    {book.title}
                  </h3>

                  <p className="text-yellow-600/70 text-sm mb-4 line-clamp-2">
                    {book.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-yellow-600/80">
                      <User className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm">{book.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-600/80">
                      <Calendar className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm">{book.year}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-yellow-600/20">
                    <span className="text-xl font-bold text-yellow-600">
                      {book.price}
                    </span>
                    <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg transition-colors">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={book.id}
                className="bg-zinc-900 rounded-xl shadow-lg shadow-yellow-600/10 hover:shadow-yellow-600/20 border border-yellow-600/20 transition-all duration-300 overflow-hidden flex">
                <div className="w-32 h-40 flex-shrink-0 bg-zinc-800">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-yellow-600 flex-1">
                        {book.title}
                      </h3>
                      <div className="bg-yellow-600 text-black px-2 py-1 rounded-full flex items-center gap-1 text-xs font-bold ml-2">
                        <Star className="w-3 h-3 fill-black" />
                        {book.rating}
                      </div>
                    </div>
                    <p className="text-yellow-600/70 text-sm mb-2 line-clamp-1">
                      {book.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-yellow-600/80 mb-2">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3 text-yellow-600" />
                        {book.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-yellow-600" />
                        {book.year}
                      </span>
                      <span className="bg-yellow-600/20 text-yellow-600 px-2 py-0.5 rounded-full text-xs font-medium border border-yellow-600/30">
                        {book.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-yellow-600">
                      {book.price}
                    </span>
                    <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-4 py-1.5 rounded-lg text-sm transition-colors">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-zinc-900 border border-yellow-600/20 rounded-2xl shadow-lg p-12 max-w-md mx-auto">
              <BookOpen className="w-16 h-16 text-yellow-600/50 mx-auto mb-4" />
              <p className="text-yellow-600 text-lg font-semibold mb-2">
                Không tìm thấy sách
              </p>
              <p className="text-yellow-600/70 text-sm">
                Thử tìm kiếm với từ khóa khác nhé!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-600/30 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-yellow-600 text-sm">
            © 2025 VTV02. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BookLibrary;
