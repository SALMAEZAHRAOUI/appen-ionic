import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private db!: Dexie;
  private userEmail: string | null = null;

  constructor() {
    this.initDatabase();
  }

  private async initDatabase() {
    this.db = new Dexie('NouveauNomDatabase'); 
    this.db.version(9).stores({  
      users: 'email, username, password' ,
      clients: '++id, userId, name, address, email, phone', 
      produits: '++id, userId, name, stock, image, prix', // Ajout de la colonne prix
      fournisseurs: '++id, userId, name, address, email, phone', 
      commandes: '++id, userId, clientId, prixTotal, statutcomm, date', 
      commandeDetails: '++id, commandeId, produitId, quantite' ,
      livreurs: '++id, userId, name, email, phone , password'
    });

    try {
      await this.db.open(); 
    } catch (error) {
      console.error('Erreur lors de l\'ouverture de la base de données:', error);
      throw error;
    }
  }

  setUserEmail(userEmail: string | null) {
    this.userEmail = userEmail;
  }

  getCurrentUserEmail(): string | null {
    console.log('Email de l\'utilisateur actuel :', this.userEmail);
    return this.userEmail;
  }

  async checkEmailExists(email: string): Promise<boolean> {
    try {
      const user = await this.db.table('users').get(email);
      return !!user;
    } catch (error) {
      console.error('Erreur lors de la vérification de l\'e-mail:', error);
      throw error;
    }
  }

  async addUser(username: string, email: string, password: string) {
  try {
    await this.db.table('users').put({ email, username, password });
    this.setUserEmail(email); // Mettre à jour l'email de l'utilisateur dans le service
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
    throw error;
  }
}
async checkUserExists(identifier: string, password: string): Promise<boolean> {
  try {
    let user;
    if (identifier.includes('@')) {
      user = await this.db.table('users').where('email').equals(identifier).first();
    } else {
      user = await this.db.table('users').where('username').equals(identifier).first();
    }
    const email = user ? user.email : null;
    if (email) {
      this.setUserEmail(email); // Mettre à jour l'email de l'utilisateur dans le service
    }
    return user !== undefined && user.password === password;
  } catch (error) {
    console.error('Erreur lors de la vérification de l\'utilisateur:', error);
    if (error instanceof Dexie.DexieError) {
      console.error('Dexie Error:', error);
    }
    throw error;
  }
}

async ajouterProduit(name: string, stock: number, image: string, prix: number): Promise<void> {
  try {
    const userEmail = this.getCurrentUserEmail();
    if (userEmail) {
      await this.db.table('produits').put({ name, userId: userEmail, stock, image, prix });
      console.log('Produit ajouté avec succès !');
    } else {
      console.error('Impossible d\'ajouter le produit: email de l\'utilisateur non trouvé.');
    }
  } catch (error) {
    console.error('Erreur lors de l\'ajout du produit à la base de données:', error);
    throw error;
  }
}

  async getAllProducts(): Promise<any[]> {
    try {
      const userId = this.getCurrentUserEmail();
      if (userId) {
        return await this.db.table('produits').where('userId').equals(userId).toArray();
      } else {
        return [];
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des produits:', error);
      throw error;
    }
  }

  async getProductById(productId: string): Promise<any> {
    try {
      return await this.db.table('produits').get(parseInt(productId));
    } catch (error) {
      console.error('Erreur lors de la récupération du produit par ID:', error);
      throw error;
    }
  }
  
  async updateProduct(productId: string, updatedProduct: any): Promise<void> {
    try {
      await this.db.table('produits').update(parseInt(productId), updatedProduct);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du produit:', error);
      throw error;
    }
  }
  async updateProductStock(productId: string, newStock: number): Promise<void> {
    try {
      // Mettre à jour le stock du produit dans la base de données
      await this.db.table('produits').update(parseInt(productId), { stock: newStock });
      console.log('Stock du produit mis à jour avec succès !');
    } catch (error) {
      console.error('Erreur lors de la mise à jour du stock du produit:', error);
      throw error;
    }
  }
  
  
  async deleteProduct(productId: string): Promise<void> {
    try {
      await this.db.table('produits').delete(parseInt(productId));
    } catch (error) {
      console.error('Erreur lors de la suppression du produit:', error);
      throw error;
    }
  }
  async ajouterClient(name: string, address: string, email: string, phone: string): Promise<void> {
    try {
      const userEmail = this.getCurrentUserEmail();
      if (userEmail) {
        await this.db.table('clients').put({ userId: userEmail, name, address, email, phone });
        console.log('Client ajouté avec succès !');
      } else {
        console.error('Impossible d\'ajouter le client: email de l\'utilisateur non trouvé.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout du client à la base de données:', error);
      throw error;
    }
  }

  async getAllClients(): Promise<any[]> {
    try {
      const userId = this.getCurrentUserEmail();
      if (userId) {
        return await this.db.table('clients').where('userId').equals(userId).toArray();
      } else {
        return [];
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des clients:', error);
      throw error;
    }
  }

  async getClientById(clientId: string): Promise<any> {
    try {
      return await this.db.table('clients').get(parseInt(clientId));
    } catch (error) {
      console.error('Erreur lors de la récupération du client par ID:', error);
      throw error;
    }
  }
  
  async updateClient(clientId: string, updatedClient: any): Promise<void> {
    try {
      await this.db.table('clients').update(parseInt(clientId), updatedClient);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du client:', error);
      throw error;
    }
  }
  
  async deleteClient(clientId: string): Promise<void> {
    try {
      await this.db.table('clients').delete(parseInt(clientId));
    } catch (error) {
      console.error('Erreur lors de la suppression du client:', error);
      throw error;
    }
  }
  async ajouterFournisseur(name: string, address: string, email: string, phone: string): Promise<void> {
    try {
      const userEmail = this.getCurrentUserEmail();
      if (userEmail) {
        await this.db.table('fournisseurs').put({ userId: userEmail, name, address, email, phone });
        console.log('Fournisseur ajouté avec succès !');
      } else {
        console.error('Impossible d\'ajouter le fournisseur: email de l\'utilisateur non trouvé.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout du fournisseur à la base de données:', error);
      throw error;
    }
  }
  
  async getAllFournisseurs(): Promise<any[]> {
    try {
      const userId = this.getCurrentUserEmail();
      if (userId) {
        return await this.db.table('fournisseurs').where('userId').equals(userId).toArray();
      } else {
        return [];
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des fournisseurs:', error);
      throw error;
    }
  }
  
  async getFournisseurById(fournisseurId: string): Promise<any> {
    try {
      return await this.db.table('fournisseurs').get(parseInt(fournisseurId));
    } catch (error) {
      console.error('Erreur lors de la récupération du fournisseur par ID:', error);
      throw error;
    }
  }
  
  async updateFournisseur(fournisseurId: string, updatedFournisseur: any): Promise<void> {
    try {
      await this.db.table('fournisseurs').update(parseInt(fournisseurId), updatedFournisseur);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du fournisseur:', error);
      throw error;
    }
  }
  
  async deleteFournisseur(fournisseurId: string): Promise<void> {
    try {
      await this.db.table('fournisseurs').delete(parseInt(fournisseurId));
    } catch (error) {
      console.error('Erreur lors de la suppression du fournisseur:', error);
      throw error;
    }
  }
  async ajouterCommande(commandeDetails: {
    clientId: string;
    date: string;
    prixTotal: number;
    status: string;
    produits: { id: string; quantity: number }[];
  }) {
    try {
      const userEmail = this.getCurrentUserEmail();
      if (userEmail) {
        const orderId = await this.db.table('commandes').put({
          userId: userEmail,
          clientId: commandeDetails.clientId,
          date: commandeDetails.date,
          prixTotal: commandeDetails.prixTotal,
          statutcomm: commandeDetails.status
        });
  
        // Ajoutez les détails de la commande dans la table commandeDetails
        for (const produit of commandeDetails.produits) {
          await this.db.table('commandeDetails').put({
            commandeId: orderId,
            produitId: produit.id,
            quantite: produit.quantity
          });
        }
  
        console.log('Commande ajoutée avec succès !');
      } else {
        console.error('Impossible d\'ajouter la commande: email de l\'utilisateur non trouvé.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la commande à la base de données:', error);
      throw error;
    }
  }
  
  async getAllCommandes(): Promise<any[]> {
    try {
      const userId = this.getCurrentUserEmail();
      if (userId) {
        return await this.db.table('commandes').where('userId').equals(userId).toArray();
      } else {
        return [];
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes :', error);
      throw error;
    }
  }
  async getOrderDetailsByOrderId(orderId: string): Promise<any[]> {
    try {
      return await this.db.table('commandeDetails').where('commandeId').equals(parseInt(orderId)).toArray();
    } catch (error) {
      console.error('Erreur lors de la récupération des détails de la commande par ID de commande:', error);
      throw error;
    }
  }
  
  async updateOrderDetail(orderDetailId: string, updatedDetail: any): Promise<void> {
    try {
      await this.db.table('commandeDetails').update(parseInt(orderDetailId), updatedDetail);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du détail de la commande:', error);
      throw error;
    }
  }
  
  async deleteOrderDetail(orderDetailId: string): Promise<void> {
    try {
      await this.db.table('commandeDetails').delete(parseInt(orderDetailId));
    } catch (error) {
      console.error('Erreur lors de la suppression du détail de la commande:', error);
      throw error;
    }
  }
  async getOrderById(orderId: string): Promise<any> {
    try {
      return await this.db.table('commandes').get(parseInt(orderId));
    } catch (error) {
      console.error('Erreur lors de la récupération de la commande par ID:', error);
      throw error;
    }
  }
  
  async updateOrder(orderId: string, updatedOrder: any): Promise<void> {
    try {
      await this.db.table('commandes').update(parseInt(orderId), updatedOrder);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la commande:', error);
      throw error;
    }
  }
  
  async deleteOrder(orderId: string): Promise<void> {
    try {
      await this.db.table('commandes').delete(parseInt(orderId));
    } catch (error) {
      console.error('Erreur lors de la suppression de la commande:', error);
      throw error;
    }
  }
  async addDeliveryPerson(name: string, email: string, phone: string, password: string): Promise<void> {
  try {
    const userEmail = this.getCurrentUserEmail();
    if (userEmail) {
      await this.db.table('livreurs').put({ userId: userEmail, name, email, phone, password });
      console.log('Livreur ajouté avec succès !');
    } else {
      console.error('Impossible d\'ajouter le livreur: email de l\'utilisateur non trouvé.');
    }
  } catch (error) {
    console.error('Erreur lors de l\'ajout du livreur à la base de données:', error);
    throw error;
  }
}

async getAllDeliveryPersons(): Promise<any[]> {
  try {
    const userId = this.getCurrentUserEmail();
    if (userId) {
      return await this.db.table('livreurs').where('userId').equals(userId).toArray();
    } else {
      return [];
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des livreurs:', error);
    throw error;
  }
}

async getDeliveryPersonById(deliveryPersonId: string): Promise<any> {
  try {
    return await this.db.table('livreurs').get(parseInt(deliveryPersonId));
  } catch (error) {
    console.error('Erreur lors de la récupération du livreur par ID:', error);
    throw error;
  }
}

async updateDeliveryPerson(deliveryPersonId: string, updatedDeliveryPerson: any): Promise<void> {
  try {
    await this.db.table('livreurs').update(parseInt(deliveryPersonId), updatedDeliveryPerson);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du livreur:', error);
    throw error;
  }
}

async deleteDeliveryPerson(deliveryPersonId: string): Promise<void> {
  try {
    await this.db.table('livreurs').delete(parseInt(deliveryPersonId));
  } catch (error) {
    console.error('Erreur lors de la suppression du livreur:', error);
    throw error;
  }
}
async checkDeliveryPersonExists(identifier: string, password: string): Promise<boolean> {
  try {
    let deliveryPerson;
    if (identifier.includes('@')) {
      deliveryPerson = await this.db.table('livreurs').where('email').equals(identifier).first();
    } else {
      deliveryPerson = await this.db.table('livreurs').where('name').equals(identifier).first();
    }
    const email = deliveryPerson ? deliveryPerson.email : null;
    if (email) {
      this.setUserEmail(email); // Mettre à jour l'email du livreur dans le service
    }
    return deliveryPerson !== undefined && deliveryPerson.password === password;
  } catch (error) {
    console.error('Erreur lors de la vérification du livreur:', error);
    if (error instanceof Dexie.DexieError) {
      console.error('Dexie Error:', error);
    }
    throw error;
  }
}
async getOrdersByConnectedDeliveryPerson(): Promise<any[]> {
  try {
    const userEmail = this.getCurrentUserEmail(); // Obtenir l'email de l'utilisateur connecté
    if (userEmail) {
      const connectedDeliveryPerson = await this.db.table('livreurs').where('email').equals(userEmail).first(); // Récupérer le livreur connecté par son email
      if (connectedDeliveryPerson) {
        // Si le livreur connecté est trouvé, récupérer son ID
        const connectedDeliveryPersonId = connectedDeliveryPerson.userId;
        // En utilisant l'ID du livreur connecté, récupérer les commandes associées à cet utilisateur
        return await this.db.table('commandes').where('userId').equals(connectedDeliveryPersonId).toArray();
      } else {
        console.log('Livreur connecté introuvable.');
        return [];
      }
    } else {
      console.log('Email de l\'utilisateur connecté non trouvé.');
      return [];
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des commandes du livreur connecté :', error);
    throw error;
  }
}
async getClientsByConnectedDeliveryPerson(): Promise<any[]> {
  try {
    const userEmail = this.getCurrentUserEmail(); // Obtenir l'email de l'utilisateur connecté
    if (userEmail) {
      const connectedDeliveryPerson = await this.db.table('livreurs').where('email').equals(userEmail).first(); // Récupérer le livreur connecté par son email
      if (connectedDeliveryPerson) {
        // Si le livreur connecté est trouvé, récupérer son ID
        const connectedDeliveryPersonId = connectedDeliveryPerson.userId;
        // En utilisant l'ID du livreur connecté, récupérer les clients associés à cet utilisateur
        return await this.db.table('clients').where('userId').equals(connectedDeliveryPersonId).toArray();
      } else {
        console.log('Livreur connecté introuvable.');
        return [];
      }
    } else {
      console.log('Email de l\'utilisateur connecté non trouvé.');
      return [];
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des clients du livreur connecté :', error);
    throw error;
  }
}
async getOrdersByClientId(clientId: string): Promise<any[]> {
  try {
    const userId = this.getCurrentUserEmail(); // Obtenez l'e-mail de l'utilisateur actuellement connecté
    if (userId) {
      // Recherchez les commandes associées à l'ID du client et à l'ID de l'utilisateur connecté
      return await this.db.table('commandes').where('userId').equals(userId).and(commande => commande.clientId === clientId).toArray();
    } else {
      console.log('Email de l\'utilisateur connecté non trouvé.');
      return [];
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des commandes du client :', error);
    throw error;
  }
}

  
}
