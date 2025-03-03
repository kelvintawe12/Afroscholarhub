document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const resources = document.querySelectorAll('.resource-item');
    const searchInput = document.querySelector('#search-input');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            const filter = this.textContent.toLowerCase();
            filterResources(filter, searchInput.value.toLowerCase());
        });
    });

    searchInput.addEventListener('input', function() {
        const filter = document.querySelector('.filter-btn.active').textContent.toLowerCase();
        filterResources(filter, this.value.toLowerCase());
    });

    function filterResources(filter, searchTerm) {
        resources.forEach(resource => {
            const matchesFilter = filter === 'all' || resource.classList.contains(filter);
            const matchesSearch = resource.textContent.toLowerCase().includes(searchTerm);

            if (matchesFilter && matchesSearch) {
                resource.style.display = 'block';
                resource.classList.add('fade-in');
            } else {
                resource.style.display = 'none';
                resource.classList.remove('fade-in');
            }
        });
    }
});