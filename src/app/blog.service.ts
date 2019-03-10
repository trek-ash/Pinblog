import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blog} from './blog.model';
import { map } from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({providedIn: 'root'})
export class BlogService {
  private blog: Blog;
  private title;
  private HomeBlogs: Blog[] ;
  private blogupdated = new Subject<Blog[]>();
 constructor(private router: Router,private httpClient: HttpClient) {}
 addBloginfo(title: string, brief: string) {
   const blog: Blog = {id: null, title: title, brief: brief, content: null, status: 'unsaved'};
   this.title = title;
   this.httpClient.post<{_id: string, title: string, brief: string}>('http://localhost:3000/api/addbloginfo', blog).subscribe((resdata) =>{
     console.log('info data:', resdata);
     this.blog = {
      id: resdata._id,
      title: resdata.title,
      brief: resdata.brief,
      content: null,
      status: 'unsaved'
     };

     this.router.navigate(['/detail']);
   });
 }
 onblogdetailsformsubmit(content: string) {
  console.log(this.blog.id);

  this.blog.content = content;
  this.httpClient.post<{_id: string, title: string, brief: string, content: string}>('http://localhost:3000/api/addblogdetails', this.blog)
    .subscribe(resdata => {
    console.log(resdata);
    this.router.navigate(['/']);
  });
 }
 getTitle(){
   console.log(this.title);
   return this.title;
 }
 getBlogs() {
  this.httpClient.get<{message: string, Blogs: any}>('http://localhost:3000').pipe(map((postData) => {
    return postData.Blogs.map(blog => {
      return {
        title: blog.title,
        content: blog.content,
        id: blog._id
      };
    });
  }))
    .subscribe(
      (transformedblog) => {
        this.HomeBlogs = transformedblog;
        this.blogupdated.next([...this.HomeBlogs]);
      });

 }
  getBlogUpdateListener() {
    return this.blogupdated.asObservable();
  }
}
