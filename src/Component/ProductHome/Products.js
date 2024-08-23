import { ProductHome } from "./ProductHome";

const Products = () => {
  const products = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      name: "State of mind watch",
      price: 1960,
      description:
        "The state of mind is lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
      category: "Watches",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "Nike red Shoes",
      price: 1360,
      description:
        "Nike red Shoes is lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      category: "Shoes",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "JBL Black Headphone",
      price: 880,
      description:
        "JBL Black Headphone is lorem There are many variations of passages of Lorem Ipsum available.",
      category: "Electronics",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "RB Black Glass",
      price: 533,
      description:
        "RB Black Glass is lorem There are many variations of passages of Lorem Ipsum available, if you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      category: "Glasses",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1507764923504-cd90bf7da772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Apple MacBook Pro laptop",
      price: 19600,
      description:
        "Apple MacBook Pro laptop is lorem if you are going to use a passage of Lorem Ipsum, but the majority have suffered alteration in some form you need to be sure there isn't anything.",
      category: "Electronics",
    },
  ];
  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductHome key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Products;
