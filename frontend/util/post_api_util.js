
export const fetchExplorePosts = () => (
    $.ajax({
        url:`/api/explore/posts`,
        method:'GET'
    })
)

export const fetchProfilePosts = (id) => (
    $.ajax({
        url:`/api/profile/posts/${id}`,
        method:'GET'
    })
); 

export const fetchFeedPosts = () => (
    $.ajax({
         method: 'GET',
         url: `api/posts/${id}`
    })
)

export const fetchPost = id => (
    $.ajax({
        url: `api/posts/${id}`,
        method: 'GET'
    })
)

export const createPost = formData => (
    $.ajax({
        url: `api/posts`,
        method:'POST',
        data: formData,
        contentType: false,
        processData: false
    })
)

export const updatePost = post => (post) => (
    $.ajax({
        url: `api/posts/${post.id}` ,
        method: 'PATCH',
        data:{post}
    })
)

export const deletePost = id => (
    $.ajax({
        url: `api/posts/${id}`,
        method:'DELETE'
    })
)