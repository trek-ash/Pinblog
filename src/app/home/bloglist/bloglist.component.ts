import { Component, OnInit } from '@angular/core';
import {Blog} from '../../blog.model';
import { BlogService} from '../../blog.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
  Blogs: Blog[];
  private blogsub : Subscription;
  constructor(public blogService: BlogService) {}
  ngOnInit() {
    this.blogService.getBlogs();
    this.blogsub = this.blogService.getBlogUpdateListener().subscribe((blogs: Blog[]) => {
      this.Blogs = blogs;
    });
  }
}
