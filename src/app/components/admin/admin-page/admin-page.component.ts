import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    // Selecting the sidebar and buttons
    const sidebar = document.querySelector<HTMLElement>(".sidebar");
    const sidebarOpenBtn = document.querySelector<HTMLButtonElement>("#sidebar-open");
    const sidebarCloseBtn = document.querySelector<HTMLButtonElement>("#sidebar-close");
    const sidebarLockBtn = document.querySelector<HTMLButtonElement>("#lock-icon");

    // Check if any of the elements are null before proceeding
    if (sidebar && sidebarOpenBtn && sidebarCloseBtn && sidebarLockBtn) {
      // Function to toggle the lock state of the sidebar
      const toggleLock = () => {
        sidebar.classList.toggle("locked");
        // If the sidebar is not locked
        if (!sidebar.classList.contains("locked")) {
          sidebar.classList.add("hoverable");
          sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
        } else {
          sidebar.classList.remove("hoverable");
          sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
        }
      };

      // Function to hide the sidebar when the mouse leaves
      const hideSidebar = () => {
        if (sidebar.classList.contains("hoverable")) {
          sidebar.classList.add("close");
        }
      };

      // Function to show the sidebar when the mouse enters
      const showSidebar = () => {
        if (sidebar.classList.contains("hoverable")) {
          sidebar.classList.remove("close");
        }
      };

      // Function to show and hide the sidebar
      const toggleSidebar = () => {
        sidebar.classList.toggle("close");
      };

      // If the window width is less than 800px, close the sidebar and remove hoverability and lock
      if (window.innerWidth < 800) {
        sidebar.classList.add("close");
        sidebar.classList.remove("locked");
        sidebar.classList.remove("hoverable");
      }

      // Adding event listeners to buttons and sidebar for the corresponding actions
      sidebarLockBtn.addEventListener("click", toggleLock);
      sidebar.addEventListener("mouseleave", hideSidebar);
      sidebar.addEventListener("mouseenter", showSidebar);
      sidebarOpenBtn.addEventListener("click", toggleSidebar);
      sidebarCloseBtn.addEventListener("click", toggleSidebar);
    } else {
      console.error("One or more elements not found.");
    }
  }
}
