import React, { useState } from 'react';

// --- Home 페이지 (상품 검색) ---
export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const searchBarContainer = {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '0 1rem',
    display: 'flex',
    gap: '0.5rem',
  };
  
  const searchInput = {
    flex: 1,
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
  };
  
  const noResultContainer = {
    textAlign: 'center',
    padding: '4rem 1rem',
    color: '#9ca3af', // 회색 글씨
  };
  
  // <> 로고를 CSS로 간단히 표현
  const placeholderIcon = {
    width: '100px',
    height: '100px',
    margin: '0 auto 1rem auto',
    border: '10px solid #e5e7eb',
    borderRadius: '20px',
    transform: 'rotate(45deg)',
    opacity: 0.5,
  };
  
  return (
    <div>
      {/* 상품 검색 바 */}
      <div style={searchBarContainer}>
        <input 
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="상품 검색..."
          style={searchInput}
        />
        <button onClick={() => alert('검색 기능은 준비중입니다.')}>검색</button>
      </div>
      
      {/* 검색 결과가 없습니다 */}
      <div style={noResultContainer}>
        <div style={placeholderIcon}></div>
        <p>검색 결과가 없습니다.</p>
      </div>
    </div>
  );
}