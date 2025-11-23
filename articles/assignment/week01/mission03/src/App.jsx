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

  // 수량 조절 핸들러: 1 미만으로 내려가지 않도록 제어
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity(prev => prev + 1);

  const handleAddToCart = () => {
    if (isAdded) return;
    console.log(`(상품 이름: ${item.itemName}, 개수: ${quantity})`);
    setIsAdded(true);
  };

  // --- 스타일 정의 ---
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
  
  // 가격과 남은 수량을 가로로 배치하는 스타일
  const priceRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '0.25rem',
  };
  
  const priceStyle = { fontSize: '1rem', color: '#374151', margin: 0 };
  const quantityStyle = { fontSize: '0.875rem', color: '#6b7280', margin: 0 };

  const actionsStyle = { display: 'flex', alignItems: 'center', gap: '0.5rem' };
  
  // -, + 버튼 스타일
  const quantityBtnStyle = {
    border: '1px solid #d1d5db',
    borderRadius: '0.25rem',
    backgroundColor: '#f9fafb',
    color: '#374151',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center', // 세로 중앙 정렬
    justifyContent: 'center', // 가로 중앙 정렬
    cursor: isAdded ? 'default' : 'pointer',
    fontSize: '1.2rem',
    // lineHeight: '1', 
    // paddingBottom: '4px',
  };

  // 장바구니 버튼 스타일
  const cartBtnStyle = {
    border: 'none',
    borderRadius: '0.375rem',
    padding: '0.5rem 1rem',
    backgroundColor: isAdded ? '#9ca3af' : '#2563eb',
    color: 'white',
    cursor: isAdded ? 'default' : 'pointer',
    marginLeft: '0.5rem',
    fontWeight: 'bold',
    fontSize: '1rem',
  };

  return (
    <div style={itemStyle}>
      <div style={infoStyle}>
        <h3 style={titleStyle}>{item.itemName}</h3>
        <div style={priceRowStyle}>
            <span style={priceStyle}>{item.price.toLocaleString()} 원</span>
            <span style={quantityStyle}>남은 수량: {item.quantity || 100}</span>
        </div>
      </div>
      
      <div style={actionsStyle}>
        <button onClick={handleDecrease} disabled={isAdded} style={quantityBtnStyle}>-</button>
        <span style={{ width: '30px', textAlign: 'center', fontSize: '1rem', color: '#111827' }}>{quantity}</span>
        <button onClick={handleIncrease} disabled={isAdded} style={quantityBtnStyle}>+</button>
        <button onClick={handleAddToCart} disabled={isAdded} style={cartBtnStyle}>
          {isAdded ? '담김' : '장바구니'}
        </button>
      </div>
    </div>
  );
}

// --- CategoryPage (카테고리 필터링) ---
function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("의류");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleCategorySelect = (categoryName) => {
    console.log(`${categoryName} 카테고리 클릭`);
    setSelectedCategory(categoryName);
    const items = categoryData.filter(item => item.category === categoryName);
    setFilteredItems(items);
  };
  
  // 초기 렌더링 시 '의류' 선택
  useState(() => { handleCategorySelect("의류"); }, []);
  
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      {/* 카테고리 선택 드롭다운 */}
      <div style={{ margin: '2rem auto', width: '300px' }}>
        <select 
          value={selectedCategory} 
          onChange={(e) => handleCategorySelect(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', fontSize: '1rem', backgroundColor: '#f9fafb' }}
        >
          <option value="의류">의류</option>
          <option value="전자기기">전자기기</option>
          <option value="화장품">화장품</option>
          <option value="식품">식품</option>
        </select>
      </div>
      
      <a href="#" style={{ display: 'block', textAlign: 'right', fontWeight: 'bold', textDecoration: 'underline', color: '#111827', marginBottom: '1rem' }}>내 구매 내역</a>
      
      <div>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => <ProductItem key={item.id} item={item} />)
        ) : (
          <p style={{textAlign: 'center', color: '#6b7280'}}>상품이 없습니다.</p>
        )}
      </div>
    </div>
  );
}

// --- PricePage (가격 범위 필터링) ---
function PricePage() {
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('0');
  const [filteredItems, setFilteredItems] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleFilter = () => {
    const min = Number(minPrice) || 0;
    const max = Number(maxPrice) || Infinity;
    const items = itemData.filter(item => item.price >= min && item.price <= max);
    setFilteredItems(items);
    setHasSearched(true);
  };

  const inputStyle = {
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    padding: '0.75rem',
    fontSize: '1rem',
    width: '150px',
    textAlign: 'center' 
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      {/* 가격 필터링 UI (중앙 정렬) */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', margin: '2rem 0' }}>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={inputStyle}
          placeholder="최소 가격"
        />
        <span style={{ fontSize: '1.5rem', color: '#6b7280' }}>-</span>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={inputStyle}
          placeholder="최대 가격"
        />
        <button 
            onClick={handleFilter}
            style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem'
            }}
        >
            검색
        </button>
      </div>
      
      <a href="#" style={{ display: 'block', textAlign: 'right', fontWeight: 'bold', textDecoration: 'underline', color: '#111827', marginBottom: '1rem' }}>내 구매 내역</a>
      
      <div>
        {filteredItems.map(item => <ProductItem key={item.id} item={item} />)}
        {hasSearched && filteredItems.length === 0 && (
          <p style={{textAlign: 'center', color: '#6b7280', paddingTop: '2rem'}}>해당 가격대에 상품이 없습니다.</p>
        )}
      </div>
    </div>
  );
}

// --- SortPage (상품 정렬) ---
function SortPage() {
  const [sortType, setSortType] = useState('default');
  // 초기 상품 목록을 sortedData로 설정
  const [items, setItems] = useState(sortedData); 

  const handleSort = (type) => {
    setSortType(type);
    const newItems = [...itemData]; 
    if (type === 'name') newItems.sort((a, b) => a.itemName.localeCompare(b.itemName, 'ko'));
    else if (type === 'price') newItems.sort((a, b) => a.price - b.price);
    else { setItems(sortedData); return; } // default는 초기 sortedData로 돌아감
    setItems(newItems);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <div style={{ margin: '2rem auto', width: '200px' }}>
        <select 
          value={sortType} 
          onChange={(e) => handleSort(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', fontSize: '1rem', backgroundColor: '#f9fafb' }}
        >
          <option value="default">정렬 기준 선택</option>
          <option value="name">이름 (가나다순)</option>
          <option value="price">가격순</option>
        </select>
      </div>
      <div>
        {items.map(item => <ProductItem key={item.id} item={item} />)}
      </div>
    </div>
  );
}

// --- Navbar (네비게이션 바) ---
function Navbar() {
  const location = useLocation();
  const getLinkStyle = (path) => ({
    textDecoration: 'none',
    color: location.pathname === path ? '#2563eb' : '#6b7280',
    fontWeight: location.pathname === path ? 'bold' : '500',
  });

  return (
    <nav style={{ padding: '0.5rem 2rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff' }}>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/"><img src={logoUrl} alt="Logo" style={{ height: '32px' }} /></Link>
        <Link to="/category" style={getLinkStyle('/category')}>카테고리 필터링</Link>
        <Link to="/price" style={getLinkStyle('/price')}>가격 범위 필터링</Link>
        <Link to="/sort" style={getLinkStyle('/sort')}>상품 정렬</Link>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/cart" style={getLinkStyle('/cart')}>장바구니</Link>
        <Link to="/admin" style={{ border: '1px solid #d1d5db', borderRadius: '0.375rem', padding: '0.4rem 0.8rem', fontSize: '0.875rem', color: '#374151', textDecoration: 'none' }}>관리자</Link>
      </div>
    </nav>
  );
}

// --- FooterButton (하단 구매 버튼) ---
function FooterButton() {
  return (
    <button style={{
      display: 'block', margin: '2rem auto', width: '800px', 
      padding: '0.75rem', backgroundColor: '#ffffff', color: '#2563eb', 
      border: '2px solid #2563eb', borderRadius: '0.375rem', fontWeight: 'bold', cursor: 'pointer'
    }}>
      장바구니 구매하기
    </button>
  );
}

// --- Main App Component ---
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