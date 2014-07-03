  $(window).scroll(function(){

    $('.g').each(function() {
        $(this).find('li:not(:first-child)').hide();

        var that = this;

        $(this).find('li:not(:first-child)').hide();

        $(this).magnificPopup({
          delegate: 'a',
          type: 'image',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
          },
          mainClass: 'mfp-img-mobile',
          image: {
            titleSrc: function(item) {
              var item = $('li', $(that)).eq(item.index);
              var captionAndCredit = $('.caption', item).html();
              console.log(item.index);

              return captionAndCredit;
            },
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
          }
        });
      });
});

$(function() {
  
  var postURLs,
      isFetchingPosts = false,
      shouldFetchPosts = true,
      postsToLoad = $(".posts").children().length,
      loadNewPostsThreshold = 3000;
  
  // Load the JSON file containing all URLs
  $.getJSON('/all-posts.json', function(data) {
    postURLs = data["posts"];
    
    // If there aren't any more posts available to load than already visible, disable fetching
    if (postURLs.length <= postsToLoad)
      disableFetching();
  });
  
  // If there's no spinner, it's not a page where posts should be fetched
  if ($(".infinite-spinner").length < 1)
    shouldFetchPosts = false;
  
  // Are we close to the end of the page? If we are, load more posts
  $(window).scroll(function(e){
    if (!shouldFetchPosts || isFetchingPosts) return;
    
    var windowHeight = $(window).height(),
        windowScrollPosition = $(window).scrollTop(),
        bottomScrollPosition = windowHeight + windowScrollPosition,
        documentHeight = $(document).height();
    
    // If we've scrolled past the loadNewPostsThreshold, fetch posts
    if ((documentHeight - loadNewPostsThreshold) < bottomScrollPosition) {
      fetchPosts();
    }
  });
  
  // Fetch a chunk of posts
  function fetchPosts() {
    // Exit if postURLs haven't been loaded
    if (!postURLs) return;
    
    isFetchingPosts = true;
    
    // Load as many posts as there were present on the page when it loaded
    // After successfully loading a post, load the next one
    var loadedPosts = 0,
        postCount = $(".posts").children().length,
        callback = function() {
          loadedPosts++;
          var postIndex = postCount + loadedPosts;
          
          if (postIndex > postURLs.length-1) {
            disableFetching();
            return;
          }
          
          if (loadedPosts < postsToLoad) {
            fetchPostWithIndex(postIndex, callback);
          } else {
            isFetchingPosts = false;
          }
        };
    
    fetchPostWithIndex(postCount + loadedPosts, callback);
  }
  
  function fetchPostWithIndex(index, callback) {
    var postURL = postURLs[index];
    
    $.get(postURL, function(data) {
      $(data).find(".post").appendTo(".posts");
      callback();
    });
  }
  
  function disableFetching() {
    shouldFetchPosts = false;
    isFetchingPosts = false;
    $(".infinite-spinner").fadeOut();
  }
  
});