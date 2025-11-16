import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

// 데이터 import
import { itemData, categoryData, sortedData } from './data/mockData.js'; 

// 페이지 컴포넌트 import
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';

// 로고 이미지 import
import logoUrl from './assets/gdg_logo.svg'; 

// --- ProductItem 컴포넌트 (공용) ---
function ProductItem({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (isAdded) return;
    const numQuantity = parseInt(quantity) || 0;
    if (numQuantity <= 0) {
      alert("수량을 1개 이상 입력해주세요.");
      return;
    }
    console.log(`(상품 이름: ${item.itemName}, 개수: ${numQuantity})`);
    setIsAdded(true);
  };

  const itemStyle = {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    margin: '1rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  };

  const infoStyle = { flex: 1 };
  const titleStyle = { fontWeight: 'bold', fontSize: '1.125rem', color: '#111827', margin: 0 };
  
  const priceRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    margin: '0.25rem 0 0 0',
  };
  
  const priceStyle = { fontSize: '1rem', color: '#374151', margin: 0 };
  const quantityStyle = { fontSize: '0.875rem', color: '#6b7280', margin: 0 };

  const actionsStyle = { display: 'flex', alignItems: 'center', gap: '0.75rem' };
  
  const quantityInputStyle = {
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    padding: '0.6em 1.2em',
    fontSize: '1em',
    width: '100px',
    textAlign: 'center',
    color: '#111827',
  };
  
  const cartButtonStyle = {
    border: 'none',
    borderRadius: '0.375rem',
    padding: '0.6em 1.2em',
    fontSize: '1em',
    fontWeight: 500,
    cursor: 'pointer',
    backgroundColor: isAdded ? '#9ca3af' : '#2563eb',
    color: 'white',
  };

  return (
    <div style={itemStyle}>
      <div style={infoStyle}>
        <h3 style={titleStyle}>{item.itemName}</h3>
        <div style={priceRowStyle}>
          <p style={priceStyle}>{item.price.toLocaleString()} 원</p>
          <p style={quantityStyle}>남은 수량: {item.quantity}</p>
        </div>
      </div>
      
      <div style={actionsStyle}>
        <input 
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="개수 입력..."
          disabled={isAdded}
          style={quantityInputStyle}
        />
        <button onClick={handleAddToCart} disabled={isAdded} style={cartButtonStyle}>
          {isAdded ? '담김' : '장바구니'}
        </button>
      </div>
    </div>
  );
}

// --- CategoryPage ---
function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("의류");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleCategorySelect = (categoryName) => {
    console.log(`${categoryName} 카테고리 클릭`);
    setSelectedCategory(categoryName);
    const items = categoryData.filter(item => item.category === categoryName);
    setFilteredItems(items);
  };
  
  useState(() => {
    handleCategorySelect("의류");
  }, []);
  
  const selectBoxContainer = {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '0 1rem',
  };
  
  const selectBox = {
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    width: '200px',
    backgroundColor: '#f9fafb',
  };

  const purchaseHistoryStyle = {
    color: '#111827',
    fontWeight: 'bold',
    textDecoration: 'underline',
    display: 'block', 
    width: 'fit-content', 
    marginLeft: 'auto', 
    marginRight: 0, 
    marginBottom: '1rem',
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <div style={selectBoxContainer}>
        <select 
          value={selectedCategory} 
          onChange={(e) => handleCategorySelect(e.target.value)}
          style={selectBox}
        >
          <option value="의류">의류</option>
          <option value="전자기기">전자기기</option>
          <option value="화장품">화장품</option>
          <option value="식품">식품</option>
        </select>
      </div>
      
      <a href="#" style={purchaseHistoryStyle}>내 구매 내역</a>
      
      <div>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <ProductItem key={item.id} item={item} />
          ))
        ) : (
          <p style={{textAlign: 'center', color: '#6b7280'}}>선택된 카테고리에 상품이 없습니다.</p>
        )}
      </div>
    </div>
  );
}

// --- PricePage (가격 범위) ---
function PricePage() {
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('0');
  const [filteredItems, setFilteredItems] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleFilter = () => {
    const min = Number(minPrice) || 0;
    const max = Number(maxPrice) || Infinity;
    // 가격 범위는 전체 상품(itemData)에서 검색
    const items = itemData.filter(item => item.price >= min && item.price <= max);
    setFilteredItems(items);
    setHasSearched(true);
  };
  
  const priceInputContainer = {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '0 1rem',
    display: 'flex',
    gap: '0.5rem',
  };
  
  const priceInput = {
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    width: '200px',
    backgroundColor: '#f9fafb',
  };
  
  const purchaseHistoryStyle = {
    color: '#111827',
    fontWeight: 'bold',
    textDecoration: 'underline',
    display: 'block', 
    width: 'fit-content', 
    marginLeft: 'auto', 
    marginRight: 0, 
    marginBottom: '1rem',
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <div style={priceInputContainer}>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={priceInput}
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={priceInput}
        />
        <button onClick={handleFilter}>검색</button>
      </div>
      
      <a href="#" style={purchaseHistoryStyle}>내 구매 내역</a>
      
      <div>
        {filteredItems.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
        {hasSearched && filteredItems.length === 0 && (
          <p style={{textAlign: 'center', color: '#6b7280', paddingTop: '2rem'}}>
            해당 가격대에 상품이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}

// --- SortPage (상품 정렬) ---
function SortPage() {
  const [sortType, setSortType] = useState('default');
  
  const [sortedItems, setSortedItems] = useState([...sortedData]); 

  const handleSort = (type) => {
    setSortType(type);
    
    // 정렬은 전체 상품(itemData)을 기준
    const itemsCopy = [...itemData]; 
    
    if (type === 'name') {
      itemsCopy.sort((a, b) => a.itemName.localeCompare(b.itemName, 'ko'));
    } else if (type === 'price') {
      itemsCopy.sort((a, b) => a.price - b.price);
    } else {
      setSortedItems([...sortedData]);
      return;
    }
    setSortedItems(itemsCopy);
  };
  
  const selectBoxContainer = {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '0 1rem',
  };
  
  const selectBox = {
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    width: '200px', 
    backgroundColor: '#f9fafb',
  };
  
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      {/* 정렬 기준 선택 */}
      <div style={selectBoxContainer}>
        <select 
          value={sortType} 
          onChange={(e) => handleSort(e.target.value)}
          style={selectBox}
        >
          <option value="default">정렬 기준 선택</option>
          <option value="name">이름 (가나다순)</option>
          <option value="price">가격순</option>
        </select>
      </div>
      
      {/* 상품 목록 (sortedItems를 표시) */}
      <div>
        {sortedItems.map(item => (
           <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

// --- Navbar ---
function Navbar() {
  const location = useLocation();
  const activeLink = location.pathname;

  const navStyle = {
    padding: '0.5rem 2rem',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  };
  
  const navLinksStyle = {
    display: 'flex',
    gap: '1.5rem', 
    alignItems: 'center',
  };
  
  const getLinkStyle = (path) => ({
    fontWeight: activeLink === path ? 'bold' : '500',
    color: activeLink === path ? '#2563eb' : '#6b7280',
    textDecoration: 'none',
  });

  const adminLinkStyle = {
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    padding: '0.4rem 0.8rem',
    fontSize: '0.875rem',
    color: '#374151',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <div style={navLinksStyle}>
        <Link to="/">
          <img src={logoUrl} alt="Logo" style={{ height: '32px' }} />
        </Link>
        <Link to="/category" style={getLinkStyle('/category')}>카테고리 필터링</Link>
        <Link to="/price" style={getLinkStyle('/price')}>가격 범위 필터링</Link>
        <Link to="/sort" style={getLinkStyle('/sort')}>상품 정렬</Link>
      </div>
      <div style={navLinksStyle}>
        <Link to="/cart" style={getLinkStyle('/cart')}>장바구니</Link>
        <Link to="/admin" style={adminLinkStyle}>관리자</Link>
      </div>
    </nav>
  );
}

// --- FooterButton ---
function FooterButton() {
  const buttonStyle = {
    border: '2px solid #2563eb',
    borderRadius: '0.375rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#ffffff',
    color: '#2563eb',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '800px',
    display: 'block',
    margin: '2rem auto',
  };
  
  return (
    <button style={buttonStyle}>장바구니 구매하기</button>
  );
}

// --- 메인 App 컴포넌트 (라우터 설정) ---
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/sort" element={<SortPage />} />
          <Route path="/admin" element={<h1 style={{textAlign: 'center', padding: '2rem'}}>관리자 페이지</h1>} />
        </Routes>
      </main>
      <FooterButton />
    </BrowserRouter>
  );
}