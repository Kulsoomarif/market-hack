// // src/components/ProductList.tsx

// interface ProductListProps {
//   addToCart: (product: Product) => void;
// }

// const products: Product[] = [
//   { id: 1, name: "Product 1", price: 10 },
//   { id: 2, name: "Product 2", price: 20 },
//   { id: 3, name: "Product 3", price: 30 },
// ];

// const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
//   return (
//     <div className="p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Products</h2>
//       <div className="space-y-4">
//         {products.map((product) => (
//           <div key={product.id} className="border-b py-4">
//             <h3 className="text-xl font-semibold">{product.name}</h3>
//             <p className="text-gray-600">Price: ${product.price}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;