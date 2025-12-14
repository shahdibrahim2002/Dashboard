import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';


interface TableItem {
  productId: string;
  productName: string;
  renewalDate: Date;
  price: number;
  status: 'active' | 'inactive';
}

@Component({
  selector: 'app-stats-table',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './stats-table.html',
  styleUrl: './stats-table.scss',
})
export class StatsTable implements OnInit {
  tableData: TableItem[] = [];
  pagedItems: TableItem[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 0;

  // Mock data مع أسماء وكود المنتجات
  private mockData: TableItem[] = [
    {
      productId: '#3185484',
      productName: 'Virtual Server',
      renewalDate: new Date('2025-12-25'),
      price: 999,
      status: 'active'
    },
    {
      productId: '#3185485',
      productName: 'Dedicated Server',
      renewalDate: new Date('2025-12-25'),
      price: 999,
      status: 'inactive'
    },
    {
      productId: '#3185486',
      productName: 'Cloud Storage',
      renewalDate: new Date('2025-12-25'),
      price: 299,
      status: 'active'
    },
    {
      productId: '#3185487',
      productName: 'Web Hosting',
      renewalDate: new Date('2025-12-25'),
      price: 149,
      status: 'active'
    },
    {
      productId: '#3185488',
      productName: 'VPS Hosting',
      renewalDate: new Date('2025-12-25'),
      price: 499,
      status: 'inactive'
    },
    {
      productId: '#3185489',
      productName: 'Database Server',
      renewalDate: new Date('2025-12-26'),
      price: 899,
      status: 'active'
    },
    {
      productId: '#3185490',
      productName: 'Email Server',
      renewalDate: new Date('2025-12-27'),
      price: 199,
      status: 'active'
    },
    {
      productId: '#3185491',
      productName: 'Backup Server',
      renewalDate: new Date('2025-12-28'),
      price: 399,
      status: 'inactive'
    },
    {
      productId: '#3185492',
      productName: 'Game Server',
      renewalDate: new Date('2025-12-29'),
      price: 799,
      status: 'active'
    },
    {
      productId: '#3185493',
      productName: 'VPN Server',
      renewalDate: new Date('2025-12-30'),
      price: 299,
      status: 'active'
    },
    {
      productId: '#3185494',
      productName: 'Media Server',
      renewalDate: new Date('2025-12-31'),
      price: 599,
      status: 'inactive'
    },
    {
      productId: '#3185495',
      productName: 'File Server',
      renewalDate: new Date('2026-01-01'),
      price: 449,
      status: 'active'
    },
    {
      productId: '#3185496',
      productName: 'Application Server',
      renewalDate: new Date('2026-01-02'),
      price: 699,
      status: 'active'
    },
    {
      productId: '#3185497',
      productName: 'Proxy Server',
      renewalDate: new Date('2026-01-03'),
      price: 349,
      status: 'inactive'
    },
    {
      productId: '#3185498',
      productName: 'DNS Server',
      renewalDate: new Date('2026-01-04'),
      price: 199,
      status: 'active'
    }
  ];

  ngOnInit(): void {
    this.tableData = this.mockData;
    this.totalPages = Math.ceil(this.tableData.length / this.itemsPerPage);
    this.updatePagedItems();
  }

  updatePagedItems(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedItems = this.tableData.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.updatePagedItems();
    }
  }

  getPages(): number[] {
    const pages: number[] = [];
    const maxPagesToShow = 5;

    if (this.totalPages <= maxPagesToShow) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, this.currentPage - 2);
      let end = Math.min(this.totalPages, start + maxPagesToShow - 1);

      if (end - start < maxPagesToShow - 1) {
        start = end - maxPagesToShow + 1;
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage, this.tableData.length);
  }
}

