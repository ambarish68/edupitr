import { Component, OnInit } from '@angular/core';
import { FAQModel } from './faq.model';
import { FAQService } from '../faqs.service';
import { debug } from 'util';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  public faqs: FAQModel[];
  public faqService: FAQService;
  constructor() {
    this.faqService = new FAQService();
  }

  ngOnInit() {
    this.faqs = this.faqService.getFAQs();
  }

}
