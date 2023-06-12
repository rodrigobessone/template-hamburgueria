import { useEffect, useRef, useState } from "react";
import Template from "./components/MainTemplate/Template";
import axios from "axios";
import SectionProducts from "./components/ProductsSection/SectionProducts";
import CartModal from "./components/ModalComponent/CartModal";
import BackDropComponent from "./components/ModalComponent/BackDropComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Theme from "./components/styles/Theme";
import StyledToast from "./components/styles/StyledToast";

function App() {
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);
  const [modalState, setModalState] = useState(false);
  const modalRef = useRef(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(
        "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
      );
      setProducts(response.data);
    }
    getProducts();
  }, []);

  useEffect(() => {
    function verifyClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalState(false);
      }
    }

    function verifyEsc(e) {
      if (e.key === "Escape") {
        setModalState(false);
      }
    }

    if (modalState) {
      document.addEventListener("mousedown", verifyClick);
      document.addEventListener("keydown", verifyEsc);
    }
  }, [modalState]);

  function addItem(product) {
    const existing = productsCart.find((item) => item.id === product.id);
    if (existing) {
      const productUpdated = productsCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setProductsCart(productUpdated);
    } else {
      toast.success("Produto adicionado ao carrinho", {
        autoClose: 1200,
        style: { color: `${Theme.colors.Colorprimary}` },
        bodyStyle: { color: `${Theme.colors.Colorprimary}` },
      });
      setProductsCart([...productsCart, { ...product, quantity: 1 }]);
    }
  }

  function removeItem(productId) {
    const existing = productsCart.find((item) => item.id === productId);
    if (existing) {
      if (existing.quantity === 1) {
        const updatedCart = productsCart.filter(
          (item) => item.id !== productId
        );
        setProductsCart(updatedCart);
        toast.error("Produto removido do carrinho", {
          style: { color: `${Theme.colors.Negative}` },
          autoClose: 1200,
        });
      } else {
        const productUpdated = productsCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        setProductsCart(productUpdated);
        toast.error("Uma unidade removida", {
          style: { color: `${Theme.colors.Negative}` },
          autoClose: 1200,
        });
      }
    }
  };

  function handleSearch (searchValue)  {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <Template
      setModalState={setModalState}
      handleSearch={handleSearch}
      productsCart={productsCart}
    >
      <StyledToast />
      {modalState && (
        <>
          <BackDropComponent closeModal={() => setModalState(false)} />
          <CartModal
            modalRef={modalRef}
            setModalState={setModalState}
            productsCart={productsCart}
            removeItem={removeItem}
            setProductsCart={setProductsCart}
          />
        </>
      )}
      {filteredProducts.length > 0 ? (
        <SectionProducts products={filteredProducts} addItem={addItem} />
      ) : (
        <SectionProducts products={products} addItem={addItem} />
      )}
    </Template>
  );
}

export default App;
