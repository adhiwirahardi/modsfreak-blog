document.addEventListener('DOMContentLoaded', async function () {
    const blogPostsSection = document.getElementById('blog-posts');

    try {
        // Fetch the list of posts from the blog-posts directory
        const postList = await fetchPostList();

        // Populate the blog posts section
        postList.forEach(post => {
            const postContainer = document.createElement('div');
            postContainer.classList.add('blog-post');

            postContainer.innerHTML = `
                <h2>${post.title}</h2>
                <img src="${post.image}" alt="${post.title}" class="banner">
                <p>${post.content}</p>
                <a href="${post.link}" target="_blank" class="button">Read More</a>
            `;

            blogPostsSection.appendChild(postContainer);
        });
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }

    // Function to fetch the list of posts
    async function fetchPostList() {
        const response = await fetch('blog-posts.json'); // Assuming you have a JSON file listing your posts
        if (!response.ok) {
            throw new Error(`Failed to fetch blog posts. Status: ${response.status}`);
        }
        const data = await response.json();
        return data.posts;
    }
});
