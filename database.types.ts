export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          category_id: number
          created_at: string
          description: string
          name: string
          updated_at: string
        }
        Insert: {
          category_id?: number
          created_at?: string
          description: string
          name: string
          updated_at?: string
        }
        Update: {
          category_id?: number
          created_at?: string
          description?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      follows: {
        Row: {
          created_at: string
          follower_id: string
          following_id: string
        }
        Insert: {
          created_at?: string
          follower_id: string
          following_id: string
        }
        Update: {
          created_at?: string
          follower_id?: string
          following_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "follows_follower_id_profiles_profile_id_fk"
            columns: ["follower_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "follows_following_id_profiles_profile_id_fk"
            columns: ["following_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      ideas: {
        Row: {
          claimed_at: string | null
          claimed_by: string | null
          created_at: string | null
          idea: string
          idea_id: number
          views: number
        }
        Insert: {
          claimed_at?: string | null
          claimed_by?: string | null
          created_at?: string | null
          idea: string
          idea_id?: never
          views?: number
        }
        Update: {
          claimed_at?: string | null
          claimed_by?: string | null
          created_at?: string | null
          idea?: string
          idea_id?: never
          views?: number
        }
        Relationships: [
          {
            foreignKeyName: "ideas_claimed_by_profiles_profile_id_fk"
            columns: ["claimed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      ideas_likes: {
        Row: {
          created_at: string | null
          idea_id: number
          profile_id: string
        }
        Insert: {
          created_at?: string | null
          idea_id: number
          profile_id: string
        }
        Update: {
          created_at?: string | null
          idea_id?: number
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ideas_likes_idea_id_ideas_idea_id_fk"
            columns: ["idea_id"]
            isOneToOne: false
            referencedRelation: "ideas"
            referencedColumns: ["idea_id"]
          },
          {
            foreignKeyName: "ideas_likes_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      jobs: {
        Row: {
          apply_url: string
          benefits: string | null
          company_name: string
          company_url: string
          created_at: string
          job_id: number
          job_location: Database["public"]["Enums"]["job_locations"]
          job_type: Database["public"]["Enums"]["job_types"]
          location: string
          overview: string
          position: string
          qualifications: string
          responsability: string
          salary_range: Database["public"]["Enums"]["salary_ranges"]
          skills: string | null
          updated_at: string
        }
        Insert: {
          apply_url: string
          benefits?: string | null
          company_name: string
          company_url: string
          created_at?: string
          job_id?: never
          job_location: Database["public"]["Enums"]["job_locations"]
          job_type: Database["public"]["Enums"]["job_types"]
          location: string
          overview: string
          position: string
          qualifications: string
          responsability: string
          salary_range: Database["public"]["Enums"]["salary_ranges"]
          skills?: string | null
          updated_at?: string
        }
        Update: {
          apply_url?: string
          benefits?: string | null
          company_name?: string
          company_url?: string
          created_at?: string
          job_id?: never
          job_location?: Database["public"]["Enums"]["job_locations"]
          job_type?: Database["public"]["Enums"]["job_types"]
          location?: string
          overview?: string
          position?: string
          qualifications?: string
          responsability?: string
          salary_range?: Database["public"]["Enums"]["salary_ranges"]
          skills?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      message_room_members: {
        Row: {
          created_at: string
          message_room_id: number
          profile_id: string
        }
        Insert: {
          created_at?: string
          message_room_id: number
          profile_id: string
        }
        Update: {
          created_at?: string
          message_room_id?: number
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_room_members_message_room_id_message_rooms_message_room"
            columns: ["message_room_id"]
            isOneToOne: false
            referencedRelation: "message_rooms"
            referencedColumns: ["message_room_id"]
          },
          {
            foreignKeyName: "message_room_members_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      message_rooms: {
        Row: {
          created_at: string
          message_room_id: number
        }
        Insert: {
          created_at?: string
          message_room_id?: never
        }
        Update: {
          created_at?: string
          message_room_id?: never
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          created_at: string
          message_id: number
          message_room_id: number
          seen: boolean | null
          sender_id: string
        }
        Insert: {
          content: string
          created_at?: string
          message_id?: never
          message_room_id: number
          seen?: boolean | null
          sender_id: string
        }
        Update: {
          content?: string
          created_at?: string
          message_id?: never
          message_room_id?: number
          seen?: boolean | null
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_message_room_id_message_rooms_message_room_id_fk"
            columns: ["message_room_id"]
            isOneToOne: false
            referencedRelation: "message_rooms"
            referencedColumns: ["message_room_id"]
          },
          {
            foreignKeyName: "messages_sender_id_profiles_profile_id_fk"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          notification_id: number
          post_id: number | null
          product_id: number | null
          source_id: string | null
          target_id: string
          type: Database["public"]["Enums"]["notification_type"]
        }
        Insert: {
          created_at?: string
          notification_id?: never
          post_id?: number | null
          product_id?: number | null
          source_id?: string | null
          target_id: string
          type: Database["public"]["Enums"]["notification_type"]
        }
        Update: {
          created_at?: string
          notification_id?: never
          post_id?: number | null
          product_id?: number | null
          source_id?: string | null
          target_id?: string
          type?: Database["public"]["Enums"]["notification_type"]
        }
        Relationships: [
          {
            foreignKeyName: "notifications_post_id_posts_post_id_fk"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_post_list_view"
            referencedColumns: ["post_id"]
          },
          {
            foreignKeyName: "notifications_post_id_posts_post_id_fk"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["post_id"]
          },
          {
            foreignKeyName: "notifications_product_id_products_product_id_fk"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "notifications_source_id_profiles_profile_id_fk"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "notifications_target_id_profiles_profile_id_fk"
            columns: ["target_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      post_replies: {
        Row: {
          created_at: string | null
          parent_id: number | null
          post_id: number
          profile_id: string
          reply: string
          reply_id: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          parent_id?: number | null
          post_id: number
          profile_id: string
          reply: string
          reply_id?: never
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          parent_id?: number | null
          post_id?: number
          profile_id?: string
          reply?: string
          reply_id?: never
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "post_replies_parent_id_post_replies_reply_id_fk"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "post_replies"
            referencedColumns: ["reply_id"]
          },
          {
            foreignKeyName: "post_replies_post_id_posts_post_id_fk"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_post_list_view"
            referencedColumns: ["post_id"]
          },
          {
            foreignKeyName: "post_replies_post_id_posts_post_id_fk"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["post_id"]
          },
          {
            foreignKeyName: "post_replies_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      post_upvotes: {
        Row: {
          created_at: string | null
          post_id: number
          profile_id: string
        }
        Insert: {
          created_at?: string | null
          post_id: number
          profile_id: string
        }
        Update: {
          created_at?: string | null
          post_id?: number
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_upvotes_post_id_posts_post_id_fk"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_post_list_view"
            referencedColumns: ["post_id"]
          },
          {
            foreignKeyName: "post_upvotes_post_id_posts_post_id_fk"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["post_id"]
          },
          {
            foreignKeyName: "post_upvotes_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      posts: {
        Row: {
          content: string
          created_at: string
          post_id: number
          profile_id: string
          title: string
          topic_id: number
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          post_id?: never
          profile_id: string
          title: string
          topic_id: number
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          post_id?: never
          profile_id?: string
          title?: string
          topic_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
          {
            foreignKeyName: "posts_topic_id_topics_topic_id_fk"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["topic_id"]
          },
        ]
      }
      product_upvotes: {
        Row: {
          product_id: number
          profile_id: string
        }
        Insert: {
          product_id: number
          profile_id: string
        }
        Update: {
          product_id?: number
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_upvotes_product_id_products_product_id_fk"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "product_upvotes_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      products: {
        Row: {
          category_id: number | null
          created_at: string
          description: string
          how_it_works: string
          icon: string
          name: string
          product_id: number
          profile_id: string
          stats: Json
          tagline: string
          updated_at: string
          url: string
        }
        Insert: {
          category_id?: number | null
          created_at?: string
          description: string
          how_it_works: string
          icon: string
          name: string
          product_id?: number
          profile_id: string
          stats?: Json
          tagline: string
          updated_at?: string
          url: string
        }
        Update: {
          category_id?: number | null
          created_at?: string
          description?: string
          how_it_works?: string
          icon?: string
          name?: string
          product_id?: number
          profile_id?: string
          stats?: Json
          tagline?: string
          updated_at?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_categories_category_id_fk"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "products_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar: string | null
          bio: string | null
          created_at: string
          email: string
          headline: string | null
          name: string
          profile_id: string
          role: Database["public"]["Enums"]["role"]
          stats: Json | null
          updated_at: string
          username: string
          views: Json | null
        }
        Insert: {
          avatar?: string | null
          bio?: string | null
          created_at?: string
          email: string
          headline?: string | null
          name: string
          profile_id: string
          role?: Database["public"]["Enums"]["role"]
          stats?: Json | null
          updated_at?: string
          username: string
          views?: Json | null
        }
        Update: {
          avatar?: string | null
          bio?: string | null
          created_at?: string
          email?: string
          headline?: string | null
          name?: string
          profile_id?: string
          role?: Database["public"]["Enums"]["role"]
          stats?: Json | null
          updated_at?: string
          username?: string
          views?: Json | null
        }
        Relationships: []
      }
      reviews: {
        Row: {
          comment: string
          created_at: string
          product_id: number
          profile_id: string
          rating: number
          review_id: number
          updated_at: string
        }
        Insert: {
          comment: string
          created_at?: string
          product_id: number
          profile_id: string
          rating: number
          review_id?: number
          updated_at?: string
        }
        Update: {
          comment?: string
          created_at?: string
          product_id?: number
          profile_id?: string
          rating?: number
          review_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_product_id_products_product_id_fk"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "reviews_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string | null
          equity_split: number
          product_description: string
          product_name: string
          product_stage: Database["public"]["Enums"]["product_stage"]
          product_url: string
          roles: string
          team_id: number
          team_size: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          equity_split: number
          product_description: string
          product_name: string
          product_stage: Database["public"]["Enums"]["product_stage"]
          product_url: string
          roles: string
          team_id?: never
          team_size: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          equity_split?: number
          product_description?: string
          product_name?: string
          product_stage?: Database["public"]["Enums"]["product_stage"]
          product_url?: string
          roles?: string
          team_id?: never
          team_size?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      topics: {
        Row: {
          created_at: string | null
          name: string
          slug: string
          topic_id: number
        }
        Insert: {
          created_at?: string | null
          name: string
          slug: string
          topic_id?: never
        }
        Update: {
          created_at?: string | null
          name?: string
          slug?: string
          topic_id?: never
        }
        Relationships: []
      }
    }
    Views: {
      community_post_list_view: {
        Row: {
          author_avatar: string | null
          author_name: string | null
          author_username: string | null
          created_at: string | null
          post_id: number | null
          title: string | null
          topic: string | null
          upvotes: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      job_locations: "remote" | "hybrid" | "on-site"
      job_types:
        | "full-time"
        | "part-time"
        | "contract"
        | "internship"
        | "freelance"
        | "temporary"
      notification_type:
        | "follow"
        | "review"
        | "reply"
        | "mention"
        | "like"
        | "message"
      product_stage: "idea" | "prototype" | "mvp" | "product"
      role:
        | "developer"
        | "designer"
        | "manager"
        | "marketer"
        | "founder"
        | "product-manager"
      salary_ranges:
        | "less-than-50000"
        | "$50,000 - $100,000"
        | "$100,000 - $150,000"
        | "$150,000 - $200,000"
        | "$200,000 - $250,000"
        | "$250,000 - $300,000"
        | "$300,000 - $350,000"
        | "$350,000 - $400,000"
        | "$400,000 - $450,000"
        | "$450,000 - $500,000"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      job_locations: ["remote", "hybrid", "on-site"],
      job_types: [
        "full-time",
        "part-time",
        "contract",
        "internship",
        "freelance",
        "temporary",
      ],
      notification_type: [
        "follow",
        "review",
        "reply",
        "mention",
        "like",
        "message",
      ],
      product_stage: ["idea", "prototype", "mvp", "product"],
      role: [
        "developer",
        "designer",
        "manager",
        "marketer",
        "founder",
        "product-manager",
      ],
      salary_ranges: [
        "less-than-50000",
        "$50,000 - $100,000",
        "$100,000 - $150,000",
        "$150,000 - $200,000",
        "$200,000 - $250,000",
        "$250,000 - $300,000",
        "$300,000 - $350,000",
        "$350,000 - $400,000",
        "$400,000 - $450,000",
        "$450,000 - $500,000",
      ],
    },
  },
} as const
