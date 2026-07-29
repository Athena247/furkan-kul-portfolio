export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  architectureDetails: string[];
  tags: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Global Hackathon' | 'Championship' | 'International Certification' | 'Security & Infrastructure';
  badgeColor: string;
  description: string;
  skills: string[];
  credentialId?: string;
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
}

export const PERSONAL_INFO = {
  name: "Furkan Kul",
  role: "Software Engineer & Distributed Systems Architect",
  subRole: "Software Engineer & Distributed Systems Architect",
  bio: "Modern web teknolojileri, mikroservis mimarileri, yüksek ölçeklenebilir dağıtık sistemler ve yapay zeka entegrasyonlarına odaklanan yazılım geliştirme vizyonuna sahip bir geliştirici ve sistem mimarı. Karmaşık mühendislik problemlerini endüstri standardı çözümlerle optimize eder.",
  school: "Trabzon Fen Lisesi",
  phone: "05412109802",
  phoneFormatted: "+90 (541) 210 98 02",
  instagram: "https://www.instagram.com/furkan_kul_361/",
  instagramHandle: "@furkan_kul_361",
  location: "Trabzon, Türkiye",
  status: "Aktif Projeler & Araştırmalar Üzerinde Çalışıyor",
  email: "furkankul.dev@gmail.com",
};

export const CORE_SKILLS = [
  { category: "Mimari & Yapay Zeka", items: ["Microservices Architecture", "Distributed Systems", "LLM Integration & LangChain", "FastAPI / Python Engine", "Event-Driven Systems"] },
  { category: "Frontend & Web", items: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "State Management & Optimization"] },
  { category: "Backend & Veritabanı", items: ["Node.js / Express", "Go (Golang)", "PostgreSQL", "Redis Caching", "WebSockets / Real-Time Data"] },
  { category: "Sistem & DevOps", items: ["Linux Kernel & Bash", "Docker & Containerization", "Kubernetes Orchestration", "OWASP Application Security", "REST & gRPC APIs"] },
];

export const PROJECTS: Project[] = [
  {
    id: "ai-code-assistant",
    title: "AI-Powered Code Assistant & Debugger",
    subtitle: "Büyük Dil Modeli Tabanlı Kod Analizi ve Otonom Hata Ayıklama Motoru",
    description: "Büyük dil modellerini (LLM) kullanarak kod tabanlarını derinlemesine analiz eden, karmaşık algoritmik hataları otonom olarak tespit edip optimize edilmiş kod önerileri sunan yüksek performanslı geliştirici platformu.",
    architectureDetails: [
      "LangChain ve OpenAI / Anthropic API'leri üzerinde özelleştirilmiş RAG (Retrieval-Augmented Generation) mimarisi.",
      "FastAPI (Python) backend altyapısı ile milisaniyeler seviyesinde AST (Abstract Syntax Tree) kod analizi.",
      "Next.js ve WebSocket entegrasyonu ile canlı akış (streaming) yanıtlar ve interaktif kod editörü."
    ],
    tags: ["Next.js", "Python", "FastAPI", "LangChain", "LLM Integration", "RAG"],
    metrics: [
      { label: "Hata Tespit Hızı", value: "< 250ms" },
      { label: "Kod Optimize Oranı", value: "%38 Verim Artışı" },
      { label: "Desteklenen Diller", value: "Python, TS, Go, Rust" }
    ],
    githubUrl: "https://github.com/furkankul/ai-code-assistant",
    demoUrl: "https://ai-debugger.demo.furkankul.dev",
    featured: true
  },
  {
    id: "distributed-chat",
    title: "Real-Time Distributed Chat & Collaboration Suite",
    subtitle: "Yüksek Eşzamanlılığa Sahip Uçtan Uca Şifreli Mesajlaşma Platformu",
    description: "WebSocket ve Redis Pub/Sub altyapısı kullanarak milyonlarca eşzamanlı bağlantıyı sorunsuz yönetebilen, uçtan uca şifrelenmiş (E2EE), düşük gecikmeli kurumsal mesajlaşma ve ekip çalışma platformu.",
    architectureDetails: [
      "Redis Cluster Pub/Sub mekanizması ile yatayda ölçeklenebilir mesaj dağıtım katmanı.",
      "Docker ve Nginx load balancing ile sıfır kesinti (Zero-Downtime) dağıtım modeli.",
      "WebSockets over TLS ile çift yönlü anlık veri senkronizasyonu ve Diffie-Hellman anahtar değişimi şifrelemesi."
    ],
    tags: ["Node.js", "React", "WebSockets", "Redis", "Docker", "Cybersecurity"],
    metrics: [
      { label: "Eşzamanlı Bağlantı", value: "1.000.000+" },
      { label: "Mesaj Gecikmesi", value: "< 12ms" },
      { label: "Şifreleme Standartı", value: "AES-256 GCM" }
    ],
    githubUrl: "https://github.com/furkankul/realtime-distributed-chat",
    demoUrl: "https://chat-suite.demo.furkankul.dev",
    featured: true
  },
  {
    id: "ecommerce-microservices",
    title: "Cloud-Native E-Commerce Microservices Engine",
    subtitle: "Kubernetes Üzerinde Yüksek Ölçeklenebilir Ticaret ve Stok Motoru",
    description: "Kubernetes orkestrasyonu üzerinde çalışan, esnek ödeme entegrasyonlarına, dinamik stok yönetimi motoruna ve olay tabanlı (event-driven) mesajlaşma kuyruklarına sahip kurumsal mikroservis mimarisi.",
    architectureDetails: [
      "Go (Golang) ile geliştirilmiş yüksek throughput'a sahip mikroservis haberleşmesi.",
      "PostgreSQL veritabanı okuma/yazma ayrımı (Read Replica) ve Redis cache layer ile maksimum veritabanı performansı.",
      "Kubernetes Horizontal Pod Autoscaler (HPA) ile otomatik kapasite artırımı ve esnek yük dengeleme."
    ],
    tags: ["Go (Golang)", "Node.js", "PostgreSQL", "Redis", "Kubernetes", "Microservices"],
    metrics: [
      { label: "Saniye Başı İstek (RPS)", value: "50.000+" },
      { label: "Hizmet Sürekliliği", value: "%99.99 Uptime" },
      { label: "Dağıtık Veri Ön-bellekleme", value: "Sub-millisecond" }
    ],
    githubUrl: "https://github.com/furkankul/cloud-native-ecommerce-engine",
    demoUrl: "https://ecommerce-engine.demo.furkankul.dev",
    featured: true
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "nasa-space-apps",
    title: "NASA Space Apps Challenge / Küresel Hackathon Derecesi",
    issuer: "NASA (National Aeronautics and Space Administration)",
    date: "2024",
    category: "Global Hackathon",
    badgeColor: "from-blue-600 to-indigo-600",
    description: "Dünya genelinde binlerce ekibin yarıştığı uluslararası uzay ve teknoloji yarışmasında; büyük boyutlu uydu verilerini işleyen veri modelleme algoritmaları ve optimize edilmiş yazılım mimarisiyle elde edilen küresel derece.",
    skills: ["Data Modeling", "Satellite Data Processing", "Algorithm Optimization", "Spatial Analytics"],
    featured: true
  },
  {
    id: "trabzon-uni-hackathon",
    title: "Trabzon Üniversitesi Hackathon Şampiyonluğu (1.lik)",
    issuer: "Trabzon Üniversitesi & Bilgisayar Mühendisliği Bölümü",
    date: "2024",
    category: "Championship",
    badgeColor: "from-amber-500 to-yellow-600",
    description: "Bölgesel ve ulusal düzeyde en yetenekli geliştirici ekiplerinin katıldığı organizasyonda, yüksek performanslı ve yenilikçi yazılım mimarisiyle jüri oyları sonucunda kazanılan şampiyonluk birincilik ödülü.",
    skills: ["Software Architecture", "Rapid Prototyping", "Distributed Backend", "System Design"],
    featured: true
  },
  {
    id: "linux-foundation-lfs101x",
    title: "Linux Foundation - LFS101x & Cloud Infrastructure Credential",
    issuer: "The Linux Foundation",
    date: "2024",
    category: "International Certification",
    badgeColor: "from-emerald-600 to-teal-600",
    description: "Küresel açık kaynak ekosisteminin çatı kuruluşu Linux Vakfı'ndan alınan, düşük seviyeli sistem mimarisi, Linux çekirdeği (kernel) işleyişi, dosya sistemleri ve bulut altyapı süreçlerine hakimiyeti tescil eden uluslararası sertifika.",
    skills: ["Linux Kernel Fundamentals", "Bash Automation", "System Security", "Cloud Infrastructure"],
    credentialId: "LF-98210398-SYS",
    featured: true
  },
  {
    id: "postman-student-expert",
    title: "Postman API Fundamentals Student Expert Program",
    issuer: "Postman Ecosystem",
    date: "2024",
    category: "International Certification",
    badgeColor: "from-orange-500 to-amber-600",
    description: "Dünya genelinde API geliştirme ve test otomasyon standartlarını belirleyen Postman ekosisteminden kazanılmış; kurumsal RESTful API tasarımı, mock servisler, otomatik test senaryoları ve mikroservis entegrasyon yetkinlik rozeti.",
    skills: ["RESTful API Architecture", "Automated API Testing", "Postman Test Suites", "CI/CD Integration"],
    credentialId: "PST-EXPERT-40192",
    featured: true
  },
  {
    id: "owasp-top-10-security",
    title: "OWASP Top 10 Secure Coding & Application Security Credential",
    issuer: "OWASP (Open Worldwide Application Security Project)",
    date: "2024",
    category: "Security & Infrastructure",
    badgeColor: "from-red-600 to-rose-700",
    description: "Web ve sunucu uygulamalarında kritik güvenlik açıklarını (SQLi, XSS, SSRF, IDOR vb.) önleme, sızma testi mantığı ve enterprise düzeyde güvenli kod yazma ve mimari sertleştirme standartları üzerine uluslararası yetkinlik.",
    skills: ["Secure Coding Standards", "Vulnerability Remediation", "Web Application Firewall", "Penetration Testing Logic"],
    credentialId: "OWASP-SEC-7712",
    featured: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "dagitik-sistemlerde-microservice-mimarisi",
    title: "Dağıtık Sistemlerde Microservice Mimarisi ve Event-Driven Tasarım Patterns",
    summary: "Monolitik yapılardan dağıtık mimarilere geçişte event-driven (olay tabanlı) yaklaşımın rolü, Redis Pub/Sub ve mesaj kuyrukları ile veri tutarlılığını sağlama yöntemleri.",
    publishedAt: "25 Temmuz 2026",
    readTime: "6 dk okuma",
    tags: ["Distributed Systems", "Microservices", "Event-Driven", "Redis"],
    content: `## Giriş

Günümüz modern web uygulamalarında yüksek kullanıcı yüklerini yönetebilmek, tek bir monolitik uygulamanın dikey ölçeklenmesiyle sınırlı kalamaz. Mikroservis mimarileri, sistemlerin bağımsız olarak geliştirilmesini, yayına alınmasını ve ölçeklenmesini sağlar.

## Olay Tabanlı (Event-Driven) Mimarinin Avantajları

Event-Driven Architecture (EDA), servisler arasındaki bağımlılığı (tight coupling) en aza indirir. Bir servis bir işlem gerçekleştirdiğinde, bu durumu bir olay (event) olarak yayınlar ve ilgili diğer servisler bu olayı dinleyerek kendi süreçlerini tetikler.

### Temel Prensipler:
1. **Asenkron İletişim**: Servislerin bir yanıt beklerken kilitlenmesini (blocking) önler.
2. **Yatay Ölçeklenebilirlik**: Yüksek trafikli olay dinleyicileri (event listeners) bağımsız olarak çoğaltılabilir.
3. **Fault Tolerance**: Bir servisin geçici olarak çökmesi, tüm sistemin durmasına yol açmaz; mesajlar kuyrukta bekletilir.

\`\`\`typescript
import { createClient } from 'redis';

const publisher = createClient();
await publisher.connect();

export async function publishOrderCreated(orderData: object) {
  const eventPayload = {
    eventType: 'ORDER_CREATED',
    timestamp: new Date().toISOString(),
    data: orderData
  };

  await publisher.publish('order_events', JSON.stringify(eventPayload));
  console.log('Order event published successfully');
}
\`\`\`

## Akademik & Mühendislik Disiplini

Analitik metodoloji, karmaşık yazılım sistemlerini hipotezler kurarak ve ampirik testlerle optimize ederek çözmemi sağlıyor. Sistem mimarisinde her karar, matematiksel performans metrikleriyle desteklenmelidir.`
  },
  {
    slug: "llm-tabanli-otonom-kod-inceleme-motoru",
    title: "LLM Tabanlı Otonom Kod İnceleme ve Hata Ayıklama Motoru Oluşturma",
    summary: "Büyük dil modellerini (LLM) LangChain ve AST (Abstract Syntax Tree) analizörleri ile birleştirerek yazılım projelerinde otomatik kod incelemesi ve debugging yapma teknikleri.",
    publishedAt: "18 Temmuz 2026",
    readTime: "8 dk okuma",
    tags: ["AI & LLM", "LangChain", "FastAPI", "Code Quality"],
    content: `## Yapay Zeka Destekli Geliştirme Araçlarının Geleceği

Yapay zeka modelleri artık sadece basit kod tamamlamanın ötesine geçerek, yazılım mimarilerini analiz edebilen ve güvenlik açıklarını tespit edebilen seviyeye ulaştı.

## RAG ve AST Analizi ile Zenginleştirilmiş Bağlam

Yapay zekanın kod üzerinde mantıklı karar verebilmesi için sadece ham metni değil, kodun soyut sözdizim ağacını (AST) ve proje bağımlılık haritasını anlaması gerekir.

\`\`\`python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import ast

app = FastAPI(title="AI Code Inspector Engine")

class CodeSnippet(BaseModel):
    code: str
    language: str

@app.post("/analyze")
async def analyze_code(snippet: CodeSnippet):
    try:
        parsed_ast = ast.parse(snippet.code)
        return {
            "status": "success",
            "ast_nodes_count": len(parsed_ast.body),
            "recommendation": "Syntax is valid. AI agent analyzing logical boundaries..."
        }
    except SyntaxError as e:
        raise HTTPException(status_code=400, detail=f"Syntax Error: {str(e)}")
\`\`\`

## Sonuç

Doğru istem (prompt) mühendisliği ve statik kod analizi birleştirildiğinde, geliştirme süreçlerindeki bug tespit süreleri %40'a varan oranlarda düşmektedir.`
  },
  {
    slug: "kubernetes-uzerinde-go-mikroservisleri",
    title: "Kubernetes Üzerinde Yüksek Ölçeklenebilir Go Mikroservisleri",
    summary: "Go dilinin düşük bellek tüketimi ve eşzamanlılık (concurrency) gücüyle Kubernetes orkestrasyonunda yüksek RPS (Requests Per Second) değerlerine ulaşma stratejileri.",
    publishedAt: "10 Temmuz 2026",
    readTime: "5 dk okuma",
    tags: ["Go (Golang)", "Kubernetes", "DevOps", "Performance"],
    content: `## Go ve Kubernetes: Bulut-Yerel İkili

Go dili, Google tarafından sistem programlaması ve yüksek performanslı sunucular için tasarlandı. Kubernetes'in kendisinin de Go diliyle yazılmış olması tesadüf değildir.

## Goroutine ve Memory Efficiency

Node.js veya Python sunucularına kıyasla Go, thread başına kilobaytlar seviyesinde bellek harcayan Goroutine mekanizmasıyla milyonlarca eşzamanlı isteği minimum RAM kullanımıyla karşılar.

\`\`\`go
package main

import (
	"encoding/json"
	"net/http"
	"runtime"
)

type SystemStats struct {
	Goroutines int    \`json:"goroutines"\`
	Status     string \`json:"status"\`
}

func statsHandler(w http.ResponseWriter, r *http.Request) {
	stats := SystemStats{
		Goroutines: runtime.NumGoroutine(),
		Status:     "Healthy",
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(stats)
}
\`\`\`

## Sonuç

Docker container'larını en küçük imaj boyutlarıyla derlemek, Kubernetes pod başlatma sürelerini ve kaynak tüketimini sıfıra yakın seviyeye indirir.`
  }
];
