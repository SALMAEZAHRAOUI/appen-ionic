import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-modcommande',
  templateUrl: './modcommande.page.html',
  styleUrls: ['./modcommande.page.scss'],
})
export class ModcommandePage implements OnInit {

  orderId: string | null = null;
  order: any = {};
  orderDetails: any[] = [];
  products: any[] = []; // Liste des produits avec une quantité supérieure à 0

  constructor(private route: ActivatedRoute, private router: Router, private dbService: DatabaseService) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.loadOrderDetails();
  }

  async loadOrderDetails() {
    try {
      if (this.orderId !== null) {
        this.order = await this.dbService.getOrderById(this.orderId);
        this.orderDetails = await this.dbService.getOrderDetailsByOrderId(this.orderId);
        this.loadProducts(); // Charger les produits avec une quantité supérieure à 0
      }
    } catch (error) {
      console.error('Erreur lors du chargement des détails de la commande:', error);
    }
  }

  async loadProducts() {
    try {
      // Récupérer la liste des produits avec une quantité supérieure à 0 pour cette commande
      this.products = this.orderDetails.filter(detail => detail.quantity > 0);
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error);
    }
  }

  async updateOrder() {
    try {
      if (this.orderId !== null) {
        await this.dbService.updateOrder(this.orderId, this.order);
        // Mise à jour des détails de la commande
        for (const detail of this.orderDetails) {
          await this.dbService.updateOrderDetail(detail.id, { quantity: detail.quantity });
        }
        this.navigateToOrders();
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la commande:', error);
    }
  }
  navigateToOrders() {
    this.router.navigate(['/conscommandes']);
  }

}