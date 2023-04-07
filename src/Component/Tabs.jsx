import React from 'react'

function Tabs() {
  return (
    <div className="tab container">
      <h1 className="tab_head">A broad selection of courses</h1>
      <p className="tab_desc">Choose from 213,000 online video courses with new additions published every month</p>
      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex tab_slider_nav">
          <a class="p-2 link-secondary tab_nav" href="#">World</a>
          <a class="p-2 link-secondary tab_nav" href="#">U.S.</a>
          <a class="p-2 link-secondary tab_nav" href="#">Technology</a>
          <a class="p-2 link-secondary tab_nav" href="#">Design</a>
          <a class="p-2 link-secondary tab_nav" href="#">Culture</a>
          <a class="p-2 link-secondary tab_nav" href="#">Business</a>
          <a class="p-2 link-secondary tab_nav" href="#">Politics</a>
          <a class="p-2 link-secondary tab_nav" href="#">Opinion</a>
          <a class="p-2 link-secondary tab_nav" href="#">Science</a>
          <a class="p-2 link-secondary tab_nav" href="#">Health</a>
          <a class="p-2 link-secondary tab_nav" href="#">Style</a>
          <a class="p-2 link-secondary tab_nav" href="#">Travel</a>
        </nav>
      </div>
      <div className="container tab_slider">
        <h2 className="tab_slider_head">Expand your career opportunities with Python</h2>
        <p className="tab_slider_desc">Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal </p>
        <button type="button" className="btn btn-primary me-md-3" id='signup-btn'>Explore Python</button>

      </div>
    </div>
  )
}

export default Tabs