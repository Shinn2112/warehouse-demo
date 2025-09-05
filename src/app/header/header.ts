import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { PanelMenu } from 'primeng/panelmenu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  standalone: true,
  imports: [Menubar, PanelMenu, CommonModule]
})
export class Header implements OnInit {
  items: MenuItem[] = [];
  drawerOpen: boolean = false;
  drawerTitle: string = '';
  drawerItems: MenuItem[] = [];

  ngOnInit() {
    // Top header menu
    this.items = [
      { label: 'Purchase', icon: 'pi pi-bitcoin', command: () => this.openDrawer('Purchase') },
      { label: 'Inventory', icon: 'pi pi-building-columns', command: () => this.openDrawer('Inventory') },
      { label: 'Sales', icon: 'pi pi-dollar', command: () => this.openDrawer('Sales') },
      { label: 'Settings', icon: 'pi pi-cog', command: () => this.openDrawer('Settings') }
    ];
  }

  openDrawer(title: string) {
    this.drawerTitle = title;
    this.drawerOpen = true;

    // Change drawer module when you clicked header item
    switch (title) {
      case 'Purchase':
        this.drawerItems = [
          {
            label: 'Purchase Menu',
            icon: 'pi pi-cart-plus',
            items: [
              { label: 'New Purchase', icon: 'pi pi-plus' },
              { label: 'Purchase List', icon: 'pi pi-list' }
            ]
          },
          {
            label: 'Supplier List',
            icon: 'pi pi-address-book',
            items: [
              { label: 'New Supplier', icon: 'pi pi-plus' },
              { label: 'Supplier List', icon: 'pi pi-list' }
            ]
          }
        ];
        break;

      case 'Inventory':
        this.drawerItems = [
          {
            label: 'Warehouse List',
            icon: 'pi pi-warehouse',
            items: [
              { label: 'Add Warehouse', icon: 'pi pi-plus' },
              { label: 'View Warehouse', icon: 'pi pi-list' }
            ]
          },
          {
            label: 'Inventory Menu',
            icon: 'pi pi-box',
            items: [
              { label: 'Add Stock', icon: 'pi pi-plus' },
              { label: 'Stock List', icon: 'pi pi-list' },
              { label: 'Release Stock', icon: 'pi pi-plus' }
            ]
          },
          {
            label: 'Transfer',
            icon: 'pi pi-truck',
            items: [
              { label: 'Transfer Details', icon: 'pi pi-list' }
            ]
          }
        ];
        break;

      case 'Sales':
        this.drawerItems = [
          {
            label: 'Sales Menu',
            icon: 'pi pi-dollar',
            items: [
              { label: 'New Sale', icon: 'pi pi-plus' },
              { label: 'Sales List', icon: 'pi pi-list' }
            ]
          },
          {
            label: 'Customer List',
            icon: 'pi pi-address-book',
            items: [
              { label: 'New Customer', icon: 'pi pi-plus' },
              { label: 'Customer List', icon: 'pi pi-list' }
            ]
          }
        ];
        break;

      case 'Settings':
        this.drawerItems = [
          {
            label: 'Settings Menu',
            icon: 'pi pi-cog',
            items: [
              { label: 'Profile', icon: 'pi pi-user' },
              { label: 'Log out', icon: 'pi pi-sliders-h' }
            ]
          }
        ];
        break;
    }
  }

  closeDrawer() {
    this.drawerOpen = false;
  }
}
