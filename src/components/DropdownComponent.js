const DropdownComponent = () => {
    // Your dropdown code here
    const dropdown = document.querySelector(".dropdown");
    const dropdowncontent = document.querySelector(".dropdown-content");

    dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("active");
        dropdowncontent.classList.toggle("active");
    });

    return (
        // JSX content for your component
        <div>
            {/* Other components or content */}
        </div>
    );
}

export default DropdownComponent;
