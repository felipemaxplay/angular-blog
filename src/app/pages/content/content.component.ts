import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from "../../data/dataFake";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  private id: string | null = '0';

  @Input() photoCover: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null)  {
    const result = dataFake.filter(article => article.id == id)[0];

    this.photoCover = result.photo;
    this.title = result.title;
    this.description = result.description;
  }
}
