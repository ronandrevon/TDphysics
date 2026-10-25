# History of mechanics 

## Classical Mechanics

### Lagrangian mechanics 

The Lagrangian $\mathcal L = T-V$ ($T$ is the kinetic energy and $V$ the potential), the action is defined as : 

$$
    S(x(t)) = \int \mathcal L(\dot x(t),x(t),t) dt
$$

In this formulation, Newton's law of motions are stricly equivalent to the principle of least action, which consists in finding the trajectory $x(t)$ that minimizes the action functional $S(x)$ :


$$
    \delta_{x} S = 0 
    %  ~~or~~ \frac{\partial S(x,t)}{\partial x} = 0
$$

We can demonstrate from a calculus of variations that the trajectory that minimizes this functional obeys the Euler-Legendre differential equation : 
$$
    \frac{d}{dt}\left(\frac{\partial \mathcal L}{\partial\dot x}\right) -  \frac{\partial \mathcal L}{\partial x} = 0 
$$ 

$x$ is usually writeen as the generalized coordinate $q$. 

The Euler-Legendre equations then involves as many equations as there are degrees of freedom $q$. 
For example,  in polar coordinates $\mathbf q=(r,\theta)$ and we would have one equation for $r$ and one for $\theta$.



### Hamilton-Jacobi equations


Noting that : 

$$
\mathcal L = \frac{d S(x(t),t)}{dt} =  \dot x\frac{\partial S}{\partial x} + \frac{\partial S}{\partial t}
$$

Defining the Hamiltonian as function of position $x$ and momentum $p$ (here the momentum is considered an variable independent of $x$ and related to the action as its spatial derivative) : 

$$
    H(x,p,t) = \dot xp - \mathcal L(\dot x, x,t) ~~,~~~ p=\frac{\partial S}{\partial x}
$$

We can then set up the Hamilton-Jacobi equation set up a differential equation for the action $S$ :  

$$
    \frac{\partial S}{\partial t}  = -H\left(x,\frac{\partial S}{\partial x},t\right)
$$

This problem is equivalent to Lagrangian mechanics for 

$$
% \begin{eqnarray}
      \frac{\partial H}{\partial p} =  \frac{dx}{dt}~~,~~~~
      \frac{\partial H}{\partial x} = -\frac{dp}{dt}
% \end{eqnarray}
$$









## Quantum mechanics 

### WKB approximation 


In the WKB approximation one assumes a propagating wave with a fast varying phase ($k_0\rightarrow\infty$) inside a spatially dependent envelope $\psi = \psi_0(x) e^{ik_0\tilde S(x,t)}$ 
where $\tilde S(x,t)=\int cdt-n(x)dx$ is the wavefront which is essentially the optical path $\tilde S=c\int dt=\int nds$ from which the principles of least time historically guided the laws of geometrical optics. 

In the WKB, one can obtain the following equation for the optical path $\tilde S$ (where the derivatives of the envelope are neglected as lower order terms in $k_0$ ) : 

$$
    -n^2\frac{\left(\partial_t \tilde S\right)}{ c^2}^2 + \left (\nabla \tilde S\right)^2 = 0
$$

which for time independent wave front $\partial \tilde S/\partial t=c$ precisely gives the eikonal equation of geometric optics : 

$$
    \vert \nabla S(x) \vert = n(x)
$$

which indicates that the optical paths are orthogonal to the isocontour of the refractive index. 

Since $H(x,p)=p^2/2m+V(x)$ and $p=\partial S/\partial x$, we can see that the time independent Hamilton-Jacobi equation (where the Hamiltonian is the constant energy $E$) is formally similar to the eikonal equation where the potential $V(x)$, an analogy that Hamilton had already noticed.

$$
    \vert \nabla S(x) \vert = \sqrt{2m( E-V(x))}
$$

If we consider the action of a classical partical as therefore having a similar physical meaning and origin as that of light, Hamilton Jacobi equations : 

$$
    \partial_t S + \frac{(\nabla S)^2}{2m} + V(x)S(x) = 0
$$

may be seen as the time dependent WKB approximation version of a more general equation that would involve a wave function $\psi = e^{iS(x,t)/\hbar}$. 
Note that this made sense after planck's constant was discovered which could act as a scaling parameter being homogeneous to an action. 
These notations work equally well for light whose action as $S(x,t)=\int pdx - Edt = \int \hbar k_0 nds - \hbar\omega dt$. 



### Schrodinger's  equation 

Following the ideas of De Broglie who proposed the concept of matter waves where the electron could have a wave number $p=\hbar k_0$, this lead Schrodinger to formulate an equation for a mechanical $\psi = e^{iS/\hbar}$.  
By reverse engineering which equation should have for WKB approximation the Hamilton-Jacobi equations, he ended up with : 

$$
    i\hbar\partial_t\psi = H\psi
$$

Using the relation $S=\hbar k_0\tilde S$ and $E=\hbar^2k_0^2/2m$, the time independent Jacobi equation are strictly equivalent to the geometric eikonal equation where the mechanical index of refraction becomes defined as $n(x) = \sqrt{1-V(x)/E}$.


**Historical note** : 

*When Schrodinger derived his equation in 1926, special relativity was already known  where $E^2=m^2c^4-p^2c^2$. Schrodinger originally tried in a grand unifying attempt to obtain an equation involving a second order partial derivative in time (later known as as the Klein-Gordon equation). However, its solutions to the hydrogen atom did not agree with experimental spectroscopy at the time. Schrodinger would have to settle for a first order partial derivative in time as natively suggested by the non relativistic Hamilton-Jacobi equation (where $E=mc^2+E_{nr}$ with $E_{nr}\ll mc^2$ so that $E^2-m^2c^4\approx 2mc^2E_{nr}$ and therefore $p^2/2m = E_{nr}$). The latter provided very good agreement with experiments.*

### Heinseberg Matrix mechanics 

#### Old theory of quanta
In the old theory of quanta, the electrons was considered to exist in stationary states/orbits $n$(Bohr-Sommerfeld orbits) in which the angular momentum was quantized $J=n\hbar$ (from the Bohr-Sommerfeld quantization rule $nh=\oint pdq=2\pi J$ hence $h$ also known as quantum of action). 
Kramers proposed that such periodic motion be described by Fourier series :

$$
    x_n(t) = \overset{\infty}{\underset{\alpha=-\infty}{\Sigma}} X_{\alpha}(n)e^{i\alpha\omega(n)t}
$$

where $\omega(n)$ would be the characteristic oscillating frequency of the orbit and $|X_{\alpha}|^2$ would represent the rate of classical emission of radiation for the electron to transition to level $n-\alpha$. 


#### Matrix mechanics 

Heisenberg considered this approach flawed because the electron position and orbital frequency could not be measured experimentally and that the only experimental observables where spectroscopic data which exhibit quantum jumps at frequencies given by the Rydberg-Ritz relation $\nu_{\alpha} = R_H(1/n^2-1/(n-\alpha)^2)$. He proposed to actually consider the electron periodic motion as being expressed in terms of these measured frequencies : 

$$
    x(t) = \overset{\infty}{\underset{\alpha=-\infty}{\Sigma}} x_{n,n-\alpha}e^{i\omega(n,n-\alpha)t} ~~,~~~~  \omega(n,n-\alpha) = \frac{E_n - E_{n-\alpha}}{\hbar}
$$
where $x_{n,n-\alpha} = x_{-n,n-\alpha}^{\star}$ so $x$ is real-valued.

This relation is consistent with the correspondance principle for large values of $n\gg \alpha$. Indeed, using the classical relationship $\omega=dE/dJ$, we also have : 

$$
     \frac{ E(J=n\hbar)-E(J=mh=(n-\alpha)\hbar)}{\hbar} \underset{\hbar k\rightarrow 0}{lim} \alpha\omega 
$$

as if the electron was orbiting at frequency $\alpha\omega$ and changes to orbit $(n-\alpha)\omega$ by emitting photons at energy $E = k\hbar\omega$. 




One of the most conceptually deep implications of this reformulation is that, by enforcing the addition rule for $\omega(n,k) + \omega(k,n-\alpha) = \omega(n,n-\alpha)$, the Fourier components of the product of physical quantities (which should result in identical observable transition jumps) have to obey : 

$$
   \left(xp\right)_{n,n-\alpha} = \overset{\infty}{\underset{k=-\infty}{\Sigma}} x_{nk}p_{kn-\alpha} 
$$

which is the common expression for infinite matrix multiplication.


#### Quantization rule

By trying to concile his new matrix formalism with Bohr-Sommerfeld action quantization rule $S=\oint pdx=\oint p\omega x^{\star}dt= nh$, Heisenberg started considering differentiating this rule with respect to orbital number $n$ so that $h$ would account for a scaling parameter in passing from one orbit to the other.
Although his derivation was messy, Jordan and Born realised that he had essentially come up with the generic relation 
$[x,p]=i\hbar$. 

Dirac subsequently showed more elegantly that this relation stems from a systematic way to pass from classical equations to this new matrix formalism through the algebra of [Poisson Brackets](]{https://en.wikipedia.org/wiki/Poisson_bracket}) :   

$$
    {f,g} = \frac{df}{dq}\frac{dg}{dp} - \frac{dg}{dq}\frac{df}{dp}
$$

where $p$ and $q$ are canonical conjugate variables in Hamitonian mechanics. 


If we were to differentiate classical $S$ with respect to $J$ (where we have $S=2\pi J$) we obtain : 

$$ 
\begin{eqnarray}
    \frac{dS}{dJ} 
        &=&\frac{d}{dJ}\oint p\frac{dx}{dt} dt                                                                \\
        &=& \oint            \Big(\frac{dp}{dJ}\frac{dx}{dt} + p\frac{d}{dt}\frac{dx}{dJ}            \Big)dt  \\
        &=& \oint            \Big(\frac{dp}{dJ}\frac{dx}{dt} - \frac{dp}{dt}\frac{dx}{dJ}            \Big)dt  \\
        &=& \omega\int_0^{T} \Big(\frac{dp}{dJ}\frac{dx}{d\theta} - \frac{dp}{d\theta}\frac{dx}{dJ}  \Big)dt  \\
        &=& \omega\int_0^{T} \{x,p\} dt                                                                       \\
        &=& 2\pi
\end{eqnarray}
$$ 

which yields the systematic translation rule that any Poisson bracket $\{f,g\}$ found classically [translates](https://en.wikipedia.org/wiki/Poisson_bracket#Quantization) as the commutator $[F,G]/i\hbar$ in matrix mechanics. 


#### Equation of motion 

Since the classical Hamiltonian equation for the evolution of the trajectory dependent function $a(q,p,t)$ is :

$$
    \frac{d}{dt}a(q,p,t) = \{a,\mathcal H\} + \frac{\partial a}{\partial t}
$$

by virtue of the correspondence established abolve, in the Heinsberg picture of matrix mechanics, the time evolution of the operator $A$ is :

$$
    \frac{dA}{dt} = \frac{i}{\hbar}[A,H] + \frac{\partial A}{\partial t}
$$



### Equivalence

##### Time evolution 

In the Heisenberg picture, the operators are time dependent observables where the Hamiltonian is the unitary evolution operator : 

$$
    X(t) = X_{mn}e^{i(E_m-E_n)/\hbar t} = e^{i\hat Ht}X_{mn}(0)e^{-i\hat Ht}
$$

The matrix element are related to the state vector $\vert \psi\rangle$ from : 


$$
    x_{mn} = \psi_m^{\star} X(t) \psi_n = \psi_m^{\star}(0)e^{i\hat Ht} X(0) e^{-i\hat Ht}\psi_n(0) = \psi_m(t)^{\star} X(0) \psi_n (t)
$$

where $\psi (t)= \psi(0)e^{-i\hat Ht}$ which corresponds to the Schrodinger picture where the state vector evolves in time and the matrix element are time independent operators. We therefore have Schrodinger equation :

$$
    i\hbar\partial_t\psi= H\psi
$$


#### Differential operators 

From $[X,P] = i\hbar$ we can easily establish that  $[X^n,P] = in\hbar X^{n-1}$ so that :
$$  
    [P,f] = -i\hbar\partial_x f
$$