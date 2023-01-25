import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() photoCover: string = 'https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80';
  @Input() title: string = 'My news';
  @Input() description: string = "lorem ipsum";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe( value =>
        console.log(value.get("id"))
      )
  }
}
