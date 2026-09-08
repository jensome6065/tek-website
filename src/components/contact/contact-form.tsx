"use client";

import { useActionState } from "react";
import {
  submitContactForm,
  type ContactActionState,
} from "@/lib/actions/contact";
import {
  contactRoles,
  contactTopics,
} from "@/lib/validations/contact";
import { DinoSprite } from "@/components/shared/dino-sprite";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactActionState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-card p-10 text-center shadow-soft">
        <div className="dino-hop">
          <DinoSprite size={48} tone="brand" />
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-dark-neutral">
          Delivered to the herd
        </h3>
        <p className="mt-3 max-w-sm text-muted leading-relaxed">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-3xl bg-card p-8 shadow-soft sm:p-10"
      noValidate
    >
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            aria-invalid={!!state.errors?.name}
          />
          {state.errors?.name && (
            <p className="text-sm text-maroon">{state.errors.name[0]}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@umass.edu"
            required
            aria-invalid={!!state.errors?.email}
          />
          {state.errors?.email && (
            <p className="text-sm text-maroon">{state.errors.email[0]}</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="role">I am a...</Label>
            <select
              id="role"
              name="role"
              required
              defaultValue=""
              className="flex h-11 w-full rounded-xl border border-border bg-card px-4 text-sm text-dark-neutral shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium-blue"
              aria-invalid={!!state.errors?.role}
            >
              <option value="" disabled>
                Select one
              </option>
              {contactRoles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            {state.errors?.role && (
              <p className="text-sm text-maroon">{state.errors.role[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="topic">Topic</Label>
            <select
              id="topic"
              name="topic"
              required
              defaultValue=""
              className="flex h-11 w-full rounded-xl border border-border bg-card px-4 text-sm text-dark-neutral shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium-blue"
              aria-invalid={!!state.errors?.topic}
            >
              <option value="" disabled>
                Select a topic
              </option>
              {contactTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
            {state.errors?.topic && (
              <p className="text-sm text-maroon">{state.errors.topic[0]}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="How can we help?"
            required
            aria-invalid={!!state.errors?.message}
          />
          {state.errors?.message && (
            <p className="text-sm text-maroon">{state.errors.message[0]}</p>
          )}
        </div>

        {state.message && !state.success && (
          <p className="text-sm text-maroon" role="alert">
            {state.message}
          </p>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={pending}>
          {pending ? (
            <span className="inline-flex items-center gap-2">
              <DinoSprite size={18} tone="inherit" className="dino-bob" />
              Sending…
            </span>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  );
}
