import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 onClick={() => navigate("/")}>
      Global News
      </h1>
    </div>
  )
}
