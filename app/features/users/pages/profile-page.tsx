import type { Route } from "./+types/profile-page";

interface UserProfile {
  username: string;
  avatar: string;
  bio: string;
  stats: {
    products: number;
    ideas: number;
    followers: number;
    following: number;
  };
  products: Array<{
    id: string;
    name: string;
    description: string;
    thumbnail: string;
  }>;
}

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    profile: {
      username: params.username,
      avatar: "https://github.com/shadcn.png",
      bio: "I am a developer",
      stats: {
        products: 0,
        ideas: 0,
        followers: 0,
        following: 0
      },
      products: []
    }
  };
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "User Profile" },
    { name: "description", content: "View user profile" }
  ];
};

export default function ProfilePage({ loaderData }: Route.ComponentProps) {
  const { profile } = loaderData as unknown as { profile: UserProfile };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-start gap-8">
        <img
          src={profile.avatar}
          alt={profile.username}
          className="w-32 h-32 rounded-full"
        />
        
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{profile.username}</h1>
          <p className="text-gray-600 mb-4">{profile.bio}</p>
          
          <div className="flex gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold">{profile.stats.products}</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{profile.stats.ideas}</div>
              <div className="text-gray-600">Ideas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{profile.stats.followers}</div>
              <div className="text-gray-600">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{profile.stats.following}</div>
              <div className="text-gray-600">Following</div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              <img
                src={product.thumbnail}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 