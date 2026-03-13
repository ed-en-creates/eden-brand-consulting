import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'

export function Features() {
    return (
        <section className="bg-background/40 backdrop-blur-lg py-16 md:py-32 border-t border-border">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Built to cover your needs</h2>
                    <p className="mt-4 text-muted-foreground">Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-black-950/5 border-border bg-card">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap className="size-6 text-foreground" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-foreground">Customizable</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-muted-foreground">Extensive customization options, allowing you to tailor every aspect to meet your specific needs.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-black-950/5 border-border bg-card">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2 className="size-6 text-foreground" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-foreground">You have full control</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-muted-foreground">From design elements to functionality, you have complete control to create a unique and personalized experience.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-black-950/5 border-border bg-card">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles className="size-6 text-foreground" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-foreground">Powered By AI</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-muted-foreground">Elements to functionality, you have complete control to create a unique experience.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-border">{children}</div>
    </div>
)
