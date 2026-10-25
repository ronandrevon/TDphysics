### Geodesics

**variational approach**

The equation of geodesics can be derived from finding the curves $x^{\mu}(\tau)$ that minimizes the path interval $S=\int \frac{1}{2}\sqrt{g_{\mu\nu}\dot x^{\mu}\dot x^{\nu}} d\tau$ (where $\dot x^{\mu}=\frac{dx^{\mu}}{d\tau}$) which is a variational formulation. 

Identifying that **minimizing the Lagrangian** $\mathcal L = g_{\mu\nu}\dot x^{\mu}\dot x^{\nu}$ would satisfy this condition, we use  : 

$$
\begin{eqnarray}
    \frac{\partial\mathcal L}{d x^{\beta}}      &=& g_{\mu\nu,\beta} \dot x^{\mu}\dot x^{\nu} \\
    \frac{\partial\mathcal L}{d\dot x^{\beta}}  &=& g_{\beta\nu}\dot x^{\nu} + g_{\mu\beta}\dot x^{\mu} = 2g_{\alpha\beta}\dot x^{\alpha}\\
    \frac{d}{d\tau} \left(\frac{\partial\mathcal L}{d\dot x^{\beta}}\right) &=&  g_{\beta\nu,\sigma}\dot x^{\nu}\dot x^{\sigma} + g_{\mu\beta,\sigma}\dot x^{\mu} \dot x^{\sigma} + 2g_{\alpha\beta}\ddot x^{\alpha} \\
\end{eqnarray}
$$

so that Euler-Lagrange equations yield : 

$$
\begin{eqnarray}
    \frac{d}{d\tau} \left(\frac{\partial\mathcal L}{d\dot x^{\beta}}\right) - \frac{\partial\mathcal L}{d x^{\beta}} &=& 0 \\
    g_{\alpha\beta}\ddot x^{\alpha} + \frac{1}{2}\left(g_{\beta\nu,\mu}+ g_{\mu\beta,\nu}- g_{\mu\nu,\beta}\right)\dot x^{\mu}\dot x^{\nu}  &=& 0 \\
    \ddot x^{\sigma} + \frac{1}{2}g^{\sigma\beta}\left(g_{\beta\nu,\mu}+ g_{\beta\mu,\nu}- g_{\mu\nu,\beta}\right)\dot x^{\mu}\dot x^{\nu}  &=& 0 \\
\end{eqnarray}
$$

Using the famous formula  $\Gamma^{\sigma}_{\mu\nu}=\frac{1}{2}g^{\sigma\beta}\left(g_{\beta\nu,\mu}+ g_{\beta\mu,\nu} - g_{\mu\nu,\beta}\right)$ 
which relates the derivatives of the metric with the Christoffel symbols $\Gamma^{\sigma}_{\mu\nu}$ (These are the component derivatives of the basis vectors
$\nabla_{\mu}\mathbf e_{\nu} = \Gamma^{\sigma}_{\mu\nu}\mathbf e_{\sigma}$ ) : 

$$
    \ddot x^{\sigma} + \Gamma^{\sigma}_{\mu\nu}\dot x^{\mu}\dot x^{\nu}  = 0
$$


**geometric approach**

The same equation is usually derived geometrically from the parallel transport condition 
$$
\begin{eqnarray}
    \nabla_{\boldsymbol u}\boldsymbol u = 0 \Rightarrow
    \ddot x^{\sigma} + \Gamma^{\sigma}_{\mu\nu}\dot x^{\mu}\dot x^{\nu} = 0 
\end{eqnarray}
$$ 

Using the notation of the velocity vector $\mathbf u=d\mathbf x(\tau)/d\tau=\left(\dot x^{\mu}\right)_{\mu}$,
the paralell transport rule $\nabla_{\boldsymbol v}\boldsymbol u = v^{\mu}u^{\sigma}_{;\mu} \mathbf e_{\sigma}$,
the the covariant derivative $\dot x^{\sigma}_{;\mu} =  \dot x^{\sigma}_{,\mu} + \Gamma^{\sigma}_{\mu\nu}\dot x^{\nu} $
and the trick $\dot x^{\mu}d/dx^{\mu}=d/d\tau$.
We establish the geodesics equation as : 

$$u^{\mu}u^{\sigma}_{;\mu} \mathbf 
= \dot x^{\mu}\left(\dot x^{\sigma}_{,\mu} + \Gamma^{\sigma}_{\mu\nu}\dot x^{\nu} \right) 
= \ddot x^{\sigma} + \Gamma^{\sigma}_{\mu\nu}\dot x^{\mu}\dot x^{\nu} $$
