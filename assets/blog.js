document.addEventListener('DOMContentLoaded', async function () {
    console.log('DOM loaded');

    const blogPostsSection = document.getElementById('blog-posts');
    
    
    try {
        // Fetch the list of posts from the blog-posts directory
        const postList = await fetchPostList();
        console.log('Fetched post list:', postList);

        // Populate the blog posts section
        postList.forEach(post => {
            const postContainer = document.createElement('div');
            postContainer.classList.add('blog-post');

            postContainer.innerHTML = `
                <h1>${post.title}</h1>
                <img src="${post.image}" alt="${post.title}" class="banner">
                <p>${post.content}</p>
                <a href="${post.link}" target="_blank" class="button">Read More</a>
            `;

            blogPostsSection.appendChild(postContainer);
        });
    } catch (error) {
        console.error('Error fetching or rendering blog posts:', error);
    }

    // Function to fetch the list of posts
    async function fetchPostList() {
        const response = await fetch('/assets/blog-posts.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch blog posts. Status: ${response.status}`);
        }
        const data = await response.json();
        return data.posts;
    }
});
