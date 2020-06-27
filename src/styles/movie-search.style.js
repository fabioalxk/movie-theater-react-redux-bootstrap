import styled from "styled-components";

export default styled.div`
  grid-area: movie-search;
  justify-self: center;

  .search-bar {
    position: relative;
  }

  .search-bar.active .input-text {
    max-width: 80%;
    border: 1px solid #ccc;
    background: #eee;
  }

  .search-bar .icon {
    cursor: pointer;
    position: absolute;
    top: 47%;
    left: 0;
    transform: translateY(-50%);
    padding: 13px 15px 13px 11px;
  }

  .search-bar .input-text {
    border: 0;
    border-color: #ccc;
    height: 20px;
    padding: 8px 6px 8px 35px;
  }
`;
