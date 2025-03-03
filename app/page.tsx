import { Button } from "@/components/ui";

export default function Home() {
  return (
    <main className="">
      <p className="text-primary">Something</p>
      <Button leadingIcon leading="hamburger" className="mb-1" />
      <Button size="sm" leadingIcon leading="hamburger" />

      <Button
        type="secondary"
        leadingIcon
        leading="hamburger"
        className="mb-1"
      />
      <Button type="secondary" size="sm" leadingIcon leading="hamburger" />

      <Button type="black" leadingIcon leading="hamburger" className="mb-1" />
      <Button type="black" size="sm" leadingIcon leading="hamburger" />

      <Button type="white" leadingIcon leading="hamburger" className="mb-1" />
      <Button type="white" size="sm" leadingIcon leading="hamburger" />

      <Button
        type="tertiary"
        leadingIcon
        leading="hamburger"
        className="mb-1"
      />
      <Button type="tertiary" size="sm" leadingIcon leading="hamburger" />

      <Button
        type="gradient"
        leadingIcon
        leading="hamburger"
        className="mb-1"
      />
      <Button type="gradient" size="sm" leadingIcon leading="hamburger" />
    </main>
  );
}
