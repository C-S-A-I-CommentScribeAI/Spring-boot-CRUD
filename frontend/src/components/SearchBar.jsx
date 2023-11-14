import React, { useState } from 'react';
import '../styles/components/SearchBar.css'; // CSS 파일을 import

// 이미지 파일을 import
import searchIcon from '../assets/images/search.png';

function SearchBar() {
  // 검색어를 담는 상태 변수와 그 값을 업데이트하는 함수를 생성
  const [searchTerm, setSearchTerm] = useState('');

  // 입력값이 변경될 때 호출되는 이벤트 핸들러
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 검색 버튼을 클릭했을 때 호출되는 이벤트 핸들러
  const handleSearch = () => {
    // 여기에 검색 로직을 구현하세요. 'searchTerm' 상태를 사용하여 검색할 수 있습니다.
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="search-container">
      {/* 검색어를 입력할 수 있는 input 요소 */}
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        className="search-input"
        value={searchTerm}
        onChange={handleInputChange} // 입력값이 변경될 때 handleInputChange 함수 호출
      />
      {/* 검색 버튼 */}
      <button type="button" className="search-button" onClick={handleSearch}>
        {/* 검색 아이콘 이미지 */}
        <img src={searchIcon} alt="Search Icon" />
      </button>
    </div>
  );
}

export default SearchBar; // SearchBar 컴포넌트를 내보냄
