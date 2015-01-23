---
layout: post
title:  "Adventures in site optimization"
date:   2015-12-16 10:18:46
categories: webdev projects
---

I've been working on a company website. It's a Wordpress site with a custom theme built from scratch to reduce any wastage as it's a rather custom layout. Page load times have been rather slow, so I used Google's [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) as a guideline on things to improve. 

We started out with a 6 MB transfer load that took 15s. We're now at about 3.5 MB and 10s (for the landing page, it's rather image and feature heavy). It's not ideal yet, but I'm still working on it.  
<br/>

## Things I Did

### Minified CSS and JS
Already had [Grunt](http://gruntjs.com/) minifying CSS because it was too much hassle to include CSS files individually. Also, Grunt, paired with [livereload](https://github.com/gruntjs/grunt-contrib-livereload) is amazing for preventing repetitive strain injuries (no more smashing F5 repeatedly!) for front-end web devs.

Concat-ed and minified JS files, that 145kB to 135kB, not huge, but having all the JS files in one giant file definitely reduces load on client side.


### Compress images
I used Photoshop for its 'Save for Web' feature, saving images as JPEG High/Medium when possible. That shaved off about 100-150KB per large image (1000px by 700px kind of large), and this brought down the size of the site from 6 MB to about 3.5 MB. 

Not bad for some simple opening and saving of files. I still haven't figured out PNG compression. Removing transparency greatly reduces image size, but there are some images for which we have to maintain transparency. 


### Enable asset compression on server side
On Apache, I added this to .htaccess. Lets your server compress (gzip) your assets before they get served.Surprisingly, this reduced load time from 15s to 10s (I forgot to check for load size). 

Snippet from [h5bp/server-configs](https://github.com/h5bp/server-configs):

<pre style="height: 250px; width: 100%; overflow: auto">
<code>
&lt;IfModule mod_deflate.c&gt;
    # Force compression for mangled `Accept-Encoding` request headers
    # https://developer.yahoo.com/blogs/ydn/pushing-beyond-gzipping-25601.html

    &lt;IfModule mod_setenvif.c&gt;
        &lt;IfModule mod_headers.c&gt;
            SetEnvIfNoCase ^(Accept-EncodXng|X-cept-Encoding|X{15}|~{15}|-{15})$ ^((gzip|deflate)\s*,?\s*)+|[X~-]{4,13}$ HAVE_Accept-Encoding
            RequestHeader append Accept-Encoding &quot;gzip,deflate&quot; env=HAVE_Accept-Encoding
        &lt;/IfModule&gt;
    &lt;/IfModule&gt;

    # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    # Compress all output labeled with one of the following media types.
    #
    # (!) For Apache versions below version 2.3.7 you don't need to
    # enable `mod_filter` and can remove the `&lt;IfModule mod_filter.c&gt;`
    # and `&lt;/IfModule&gt;` lines as `AddOutputFilterByType` is still in
    # the core directives.
    #
    # https://httpd.apache.org/docs/current/mod/mod_filter.html#addoutputfilterbytype

    &lt;IfModule mod_filter.c&gt;
        AddOutputFilterByType DEFLATE &quot;application/atom+xml&quot; \
                                      &quot;application/javascript&quot; \
                                      &quot;application/json&quot; \
                                      &quot;application/ld+json&quot; \
                                      &quot;application/manifest+json&quot; \
                                      &quot;application/rdf+xml&quot; \
                                      &quot;application/rss+xml&quot; \
                                      &quot;application/schema+json&quot; \
                                      &quot;application/vnd.geo+json&quot; \
                                      &quot;application/vnd.ms-fontobject&quot; \
                                      &quot;application/x-font-ttf&quot; \
                                      &quot;application/x-javascript&quot; \
                                      &quot;application/x-web-app-manifest+json&quot; \
                                      &quot;application/xhtml+xml&quot; \
                                      &quot;application/xml&quot; \
                                      &quot;font/eot&quot; \
                                      &quot;font/opentype&quot; \
                                      &quot;image/bmp&quot; \
                                      &quot;image/svg+xml&quot; \
                                      &quot;image/vnd.microsoft.icon&quot; \
                                      &quot;image/x-icon&quot; \
                                      &quot;image/png&quot; \
                                      &quot;image/jpeg&quot; \
                                      &quot;text/cache-manifest&quot; \
                                      &quot;text/css&quot; \
                                      &quot;text/html&quot; \
                                      &quot;text/javascript&quot; \
                                      &quot;text/plain&quot; \
                                      &quot;text/vcard&quot; \
                                      &quot;text/vnd.rim.location.xloc&quot; \
                                      &quot;text/vtt&quot; \
                                      &quot;text/x-component&quot; \
                                      &quot;text/x-cross-domain-policy&quot; \
                                      &quot;text/xml&quot;

    &lt;/IfModule&gt;
    &lt;IfModule mod_mime.c&gt;
        AddEncoding gzip              svgz
    &lt;/IfModule&gt;
&lt;/IfModule&gt;
</code>
</pre>
<br/>
<br/>

## Things to Look Into

### Reducing server response time
PageSpeed is telling me that it takes 0.9s for the server to respond when I should be targeting for 0.2s. I suspect caching for WP would save us some time on this. We are on a Malaysian hosting service though, so proximity shouldn't be an issue. Will probably have to run more tests on this

### Eliminate render-blocking JavaScript and CSS in above-the-fold content (ATFC)
Have yet to figure this out properly. I factored out a major chunk of ATFC but it was still giving flashes of unstyled content -- this is going to require some HTML and CSS refactoring as things like navigation style should also go into the ATFC style snippets, but it's a little too large to simply pull out right now.

