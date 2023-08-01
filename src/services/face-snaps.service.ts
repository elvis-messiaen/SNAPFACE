import { Injectable } from "@angular/core";
import { FaceSnap } from "src/app/face-snap/models/face-snap.model";

@Injectable({
  providedIn: "root"
})
export class FaceSnapService {

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: "panthère rose",
      description: "Desin animé",
      imageUrl: "https://e7.pngegg.com/pngimages/334/955/png-clipart-pink-panther-illustration-the-pink-panther-inspector-clouseau-pink-panthers-the-pink-panther-fictional-character-flower.png",
      createdDate: new Date(),
      snaps: 0,
      location: "Paris"
    },
    {
      id: 2,
      title: "Souris verte",
      description: "Comptine",
      imageUrl: "https://maiasaura.fr/cdn/shop/products/Unesourisverte_540x.jpg?v=1602174563",
      createdDate: new Date(),
      snaps: 0,
    },
    {
      id: 3,
      title: "chaton",
      description: "photo de chat mignon",
      imageUrl: "https://www.wanimo.com/veterinaire/wp-content/uploads/2015/08/images_articles_chat_chaton-peureux.jpg",
      createdDate: new Date(),
      snaps: 0,
      location: "Lille"
    },
    {
      id: 4,
      title: "panthère rose",
      description: "Desin animé",
      imageUrl: "https://e7.pngegg.com/pngimages/334/955/png-clipart-pink-panther-illustration-the-pink-panther-inspector-clouseau-pink-panthers-the-pink-panther-fictional-character-flower.png",
      createdDate: new Date(),
      snaps: 0,
      location: "Paris"
    },
    {
      id: 5,
      title: "Souris verte",
      description: "Comptine",
      imageUrl: "https://maiasaura.fr/cdn/shop/products/Unesourisverte_540x.jpg?v=1602174563",
      createdDate: new Date(),
      snaps: 0,
    },
    {
      id: 6,
      title: "chaton",
      description: "photo de chat mignon",
      imageUrl: "https://www.wanimo.com/veterinaire/wp-content/uploads/2015/08/images_articles_chat_chaton-peureux.jpg",
      createdDate: new Date(),
      snaps: 0,
      location: "Lille"
    }
  ];

  getAllfaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  snapFaceSnapById(faceSnapId: number,snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('Method not implemented.');
    }else{
      return faceSnap;
    }
  }
}

