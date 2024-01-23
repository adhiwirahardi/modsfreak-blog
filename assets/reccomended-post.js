document.addEventListener('DOMContentLoaded', async function () {
    console.log('DOM loaded');

    const recommendedPostsSection = document.getElementById('recommended-posts');

    try {
        // Fetch the list of all posts
        const allPosts = await fetchPostList();
        console.log('Fetched all post list:', allPosts);

        // Fetch three random posts
        const recommendedPosts = getRandomPosts(allPosts, 3);
        console.log('Random recommended post list:', recommendedPosts);

        // Populate the recommended posts section
        recommendedPosts.forEach(post => {
            const postContainer = document.createElement('div');
            postContainer.classList.add('recommended-post');

            postContainer.innerHTML = `
                <h1>${post.title}</h1>
                <img src="${post.image}" alt="${post.title}" class="small-banner">
                <p>${post.content}</p>
                <a href="${post.link}" target="_blank" class="button">Read More</a>
            `;

            recommendedPostsSection.appendChild(postContainer);
        });

    } catch (error) {
        console.error('Error fetching or rendering posts:', error);
    }

    // Function to fetch the list of all posts
    async function fetchPostList() {
        const response = await fetch('/assets/blog-posts.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch blog posts. Status: ${response.status}`);
        }
        const data = await response.json();
        return data.posts;
    }
    

    // Function to get a random subset of posts
    function getRandomPosts(posts, count) {
        const shuffledPosts = [...posts].sort(() => Math.random() - 0.5);
        return shuffledPosts.slice(0, count);
    }
});
