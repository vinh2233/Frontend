# Sử dụng image Node.js
FROM node:16

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và cài đặt dependencies
COPY client/frontend/package.json ./
COPY client/frontend ./
RUN npm install

# Sao chép toàn bộ mã nguồn
COPY . .

# Build ứng dụng
RUN npm run build

# Expose cổng 3000
EXPOSE 8000

# Chạy ứng dụng
CMD ["npm", "start"]