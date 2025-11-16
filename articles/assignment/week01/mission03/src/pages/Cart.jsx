import React, { useState } from 'react';
// 장바구니 데이터 import
import { cartList as mockCartList } from '../data/mockData.js';

// --- Cart (장바구니) 페이지 ---
export default function Cart() {
  // mock 데이터를 기반으로 장바구니 아이템 상태 초기화
  const [cartItems, setCartItems] = useState(
    mockCartList.items.map(item => ({ ...item, id: item.id || Math.random(), quantity: item.count }))
  );

  // useState로 각 상품의 수량 관리 (-, + 버튼)
  const handleQuantityChange = (id, amount) => {
    setCartItems(currentItems =>
      currentItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + amount;
          return { ...item, quantity: newQuantity >= 1 ? newQuantity : 1 };
        }
        return item;
      })
    );
  };

  // 총 가격 계산
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const cartItemStyle = {
    borderBottom: '1px solid #e5e7eb',
    padding: '1.5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#111827',
  };

  const totalStyle = {
    marginTop: '1.5rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #e5e7eb',
    textAlign: 'right',
    fontSize: '1.25rem',
    color: '#111827',
    fontWeight: 'bold',
  };
  
  // -, + 버튼 스타일
  const quantityButtonStyle = {
    border: '1px solid #e5e7eb',
    borderRadius: '0.25rem',
    backgroundColor: '#f9f9f9',
    color: '#374151',
    cursor: 'pointer',
    width: '28px',
    height: '28px',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1', // 버튼 텍스트 정렬
  };
  
  const quantityInputStyle = {
    width: '40px',
    textAlign: 'center',
    fontSize: '1rem',
    color: '#111827',
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem', backgroundColor: '#ffffff' }}>
      <h1 style={{ textAlign: 'center', color: '#111827', fontSize: '2.25rem' }}>장바구니</h1>
      <div style={{ marginTop: '2rem' }}>
        {cartItems.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#6b7280' }}>장바구니가 비어있습니다.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} style={cartItemStyle}>
                <div>
                  <h3 style={{margin: 0, fontSize: '1.125rem'}}>{item.itemName}</h3>
                  <p style={{margin: '0.25rem 0 0 0', color: '#6b7280'}}>{item.price.toLocaleString()}원</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <button onClick={() => handleQuantityChange(item.id, -1)} style={quantityButtonStyle}>-</button>
                  <span style={quantityInputStyle}>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)} style={quantityButtonStyle}>+</button>
                </div>
                <div style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>
                  {(item.price * item.quantity).toLocaleString()}원
                </div>
              </div>
            ))}
            <div style={totalStyle}>
              <span>총 합계: </span>
              <span style={{color: '#2563eb', marginLeft: '1rem'}}>{totalPrice.toLocaleString()}원</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}