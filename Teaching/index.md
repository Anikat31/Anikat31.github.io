---
layout: page
title: Teaching
permalink: /Teaching/
---

<style>
  .teaching-hero {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 3rem;
    margin-bottom: 4rem;
    padding: 2rem 0;
  }
  
  .teaching-content {
    flex: 1;
    min-width: 280px;
  }
  
  .teaching-content p {
    font-size: 1.15rem;
    line-height: 1.8;
    color: #374151;
    margin: 0;
  }
  
  .teaching-image-wrapper {
    flex: 0 0 280px;
    text-align: center;
  }
  
  .teaching-image {
    width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 
      0 10px 40px rgba(0, 0, 0, 0.1),
      0 2px 8px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .teaching-image:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.15),
      0 4px 16px rgba(0, 0, 0, 0.08);
  }
  
  .section-divider {
    margin: 3rem 0 2.5rem;
    border: none;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      #d1d5db 20%,
      #d1d5db 80%,
      transparent
    );
  }
  
  .section-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2rem;
    font-size: 1.75rem;
    font-weight: 700;
    color: #1f2937;
  }
  
  .section-icon {
    font-size: 1.5rem;
  }
  
  .course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .course-card {
    display: block;
    padding: 2rem;
    border-radius: 16px;
    text-decoration: none;
    color: inherit;
    background: #ffffff;
    border: 2px solid #f3f4f6;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  
  .course-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  .course-card:hover {
    transform: translateY(-6px);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.1),
      0 4px 12px rgba(0, 0, 0, 0.06);
    border-color: #e5e7eb;
  }
  
  .course-card:hover::before {
    transform: scaleX(1);
  }
  
  .course-card h3 {
    margin: 0 0 1rem 0;
    font-size: 1.35rem;
    font-weight: 700;
    color: #111827;
    transition: color 0.2s ease;
  }
  
  .course-card:hover h3 {
    color: #3b82f6;
  }
  
  .course-card p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.65;
    color: #6b7280;
  }
  
  @media (max-width: 768px) {
    .teaching-hero {
      gap: 2rem;
      margin-bottom: 3rem;
    }
    
    .teaching-image-wrapper {
      flex: 0 0 240px;
    }
    
    .teaching-image {
      width: 240px;
      height: 240px;
    }
    
    .section-header {
      font-size: 1.5rem;
    }
    
    .course-grid {
      gap: 1.5rem;
    }
  }
</style>

<div class="teaching-hero">
  <div class="teaching-content">
    <p>
      During my graduate studies, I had the opportunity to attend several
      Interesting courses. Below are a few sets of lecture notes
      and materials that I prepared while following these classes.
    </p>
  </div>

<hr class="section-divider">

<h2 class="section-header">
  <span class="section-icon">📘</span>
  Course Notes
</h2>

<div class="course-grid">
  <a href="/html/ML_NOTES.html" class="course-card">
    <h3>Machine Learning 101</h3>
    <p>
      Introductory lecture notes covering core concepts of machine learning. The notes include
      Regression, Kernel methods, SVD etc.
    </p>
  </a>
  
  <!-- Add more course cards here as needed -->
</div>
